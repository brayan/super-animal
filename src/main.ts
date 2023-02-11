const LEFT_KEY = "ArrowLeft"
const RIGHT_KEY = "ArrowRight"
const UP_KEY = "ArrowUp"
const DOWN_KEY = "ArrowDown"

const animal = document.getElementById("animal")

initViews()

function initViews() {
    if (animal != undefined) {
        animal.style.position = "relative"
        animal.style.left = "0px"
        animal.style.top = "0px"
    }

    document.onkeydown = onKeyPressed
}

function onKeyPressed(event: KeyboardEvent) {
    if (animal == undefined) {
        return
    }
    switch(event.code) {
        case LEFT_KEY: {
            animal.style.left = (parseInt(animal.style.left) - 10) + "px"
            break
        }
        case RIGHT_KEY: {
            animal.style.left = (parseInt(animal.style.left) + 10) + "px"
            break
        }
        case UP_KEY: {
            animal.style.top = (parseInt(animal.style.top) - 10) + "px"
            break
        }
        case DOWN_KEY: {
            animal.style.top = (parseInt(animal.style.top) + 10) + "px"
            break
        }
    }
}