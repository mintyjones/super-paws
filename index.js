// dogs fetching code
function getData(){
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {createDog(data)})
        .catch(e => {console.log(e)})
}
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

getData();

const heroButton = document.getElementById("randomPaw")
heroButton.addEventListener("click", getData)