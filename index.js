const urlHero = 'https://superheroapi.com/api.php/10157727801421556/'
const numberOfHeroes = 2
let allHeroData = []

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

async function getAnimalData(index){
    let response = await fetch('https://api.thedogapi.com/v1/images/search')
    let data = await response.json()
    storeAnimImage(data, index)
}

function storeHeroDetails(herodata,index){
    let heroObj = new Object();
    heroObj.name = herodata.name
    heroObj.stats = herodata.powerstats
    allHeroData.push(heroObj)
    getAnimalData(index)
    console.log(allHeroData)
}

function storeAnimImage(animimg, index) {
    allHeroData[index].image = animimg[0].url
}

function addHeroElements() {
    let names = document.querySelectorAll("h3")
    let images = document.querySelectorAll("img")
    let lists = document.querySelectorAll("ul")
    for (i=0;i<numberOfHeroes;i++) {
        lists[i].innerText = ""
        names[i].innerText = allHeroData[i].name
        images[i].src = allHeroData[i].image
        for (stat in allHeroData[i].stats) {
            let listItem = document.createElement("li")
            console.log(typeof allHeroData[i].stats[stat])
            if (allHeroData[i].stats[stat] == "null") {
                listItem.innerText = stat + ": WOOF"
            } else {
                listItem.innerText = stat + ": " + allHeroData[i].stats[stat]
            }
            lists[i].appendChild(listItem)
        }
    }
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
