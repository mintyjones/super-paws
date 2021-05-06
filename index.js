// dogs fetching code
// function getData(){
//     fetch('https://api.thedogapi.com/v1/images/search')
//         .then(response => response.json())
//         .then(data => {createDog(data)})
//         .catch(e => {console.log(e)})
// }
const dogPool = document.querySelector(".dogPool")

function createDog(dog){
    dogPool.innerHTML = ""
    let dogImage = document.createElement("img")
    dogImage.src = dog[0].url
    dogPool.appendChild(dogImage)
}

function printDogs(dogs){
    console.log(dogs)
}

// getData();

// const heroButton = document.getElementById("randomPaw")
// heroButton.addEventListener("click", getData)

//Gordon superhero code with animal pic

const urlHero = 'https://superheroapi.com/api.php/10157727801421556/'
const numberOfHeroes = 2
let allHeroData = []
const apiUrls = ['https://superheroapi.com/api.php/10157727801421556/', 'https://api.thedogapi.com/v1/images/search']

const heroPool = document.querySelector("#heroName")

function randomHero() {
    let heroId = Math.floor(Math.random()*731)
    return heroId
}

function getHeroData(index){
    let heroNum = randomHero();
    fetch(urlHero+heroNum)
    .then(response => response.json())
    .then(data => storeHeroDetails(data, index))
    .catch(e => {console.log(e)})
}

function getAnimalData(index){
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => storeAnimImage(data, index))
        .catch(e => {console.log(e)})
}

function storeHeroDetails(herodata,index){
    // console.log(`Combat: ${herodata.powerstats.combat}`)
    // console.log(`Intelligence: ${herodata.powerstats.intelligence}`)
    // console.log(`Speed: ${herodata.powerstats.speed}`)
    // console.log(`Strength: ${herodata.powerstats.strength}`)
    let heroObj = new Object();
    heroObj.name = herodata.name
    heroObj.stats = herodata.powerstats
    // heroObj.image = "something"
    allHeroData.push(heroObj)
    getAnimalData(index)
    console.log(allHeroData)
}

function addHeroElements() {
    let names = document.querySelectorAll("h3")
    let images = document.querySelectorAll("img")
    let lists = document.querySelectorAll("ul")
    for (i=0;i<numberOfHeroes;i++) {
        lists[i].innerText = ""
        names[i].innerText = allHeroData[i].name
        images[i+1].src = allHeroData[i].image
        for (stat in allHeroData[i].stats) {
            let listItem = document.createElement("li")
            console.log(typeof stat)
            listItem.innerText = stat + ": " + allHeroData[i].stats[stat]
            lists[i].appendChild(listItem)
        }
    }
}

function getName() {
    console.log("Here's a name")
}

function storeAnimImage(animimg, index) {
    allHeroData[index].image = animimg[0].url
}

const loadHeroesButton = document.getElementById("start")

loadHeroesButton.addEventListener('click', gatherAllData)

function gatherAllData() {
    allHeroData = []
    for (i=0;i<numberOfHeroes;i++) {
        getHeroData(i);
    }
    setTimeout(addHeroElements,2000)
}
