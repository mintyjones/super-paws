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

const heroButton = document.getElementById("randomPaw")
heroButton.addEventListener("click", getData)

//Gordon superhero code with animal pic

const urlHero = 'https://superheroapi.com/api.php/10157727801421556/'
const numberOfHeroes = 2
const allHeroData = []
const apiUrls = ['https://superheroapi.com/api.php/10157727801421556/', 'https://api.thedogapi.com/v1/images/search']

const heroPool = document.querySelector("#heroName")

function randomHero() {
    let heroId = Math.floor(Math.random()*731)
    return heroId
}

function getHeroData(){
    let heroNum = randomHero();
    fetch(urlHero+heroNum)
    .then(response => response.json())
    .then(data => storeHeroDetails(data))
    .catch(e => {console.log(e)})
    // heroPool.appendChild()
}

function getAnimalData(index){
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => storeAnimImage(data, index))
        .catch(e => {console.log(e)})
}

// function storeHeroData(heroData) {
//     let allHeroData = []
//     for (i=0;i<numberOfHeroes;i++) {
//         let singleHero = []
        
//     }
// }

function storeHeroDetails(herodata){
    // console.log(herodata)
    // console.log(herodata.name)
    // console.log(`Combat: ${herodata.powerstats.combat}`)
    // console.log(`Intelligence: ${herodata.powerstats.intelligence}`)
    // console.log(`Speed: ${herodata.powerstats.speed}`)
    // console.log(`Strength: ${herodata.powerstats.strength}`)
    let heroObj = new Object();
    heroObj.name = herodata.name
    heroObj.stats = herodata.powerstats
    console.log(heroObj)
    allHeroData.push(heroObj)
    console.log(allHeroData)
    // let heroName = document.getElementById("heroName")
    // heroName.innerText = herodata.name
}

function addHeroElements() {
    allHeroData = []
    let names = document.querySelectorAll("h3")
    console.log(names)
    names.forEach(getName)
}

function getName() {
    console.log("Here's a name")
}

function storeAnimImage(animimg, index) {
    allHeroData[index].image = animimg[0].url
}

const loadHeroesButton = document.getElementById("getHeroes")

loadHeroesButton.addEventListener('click', gatherAllData)

function gatherAllData() {
    for (i=0;i<numberOfHeroes;i++) {
        getHeroData();
        getAnimalData(i)
    }
    addHeroElements()
}
