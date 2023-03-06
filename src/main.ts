const LEFT_KEY = "ArrowLeft"
const RIGHT_KEY = "ArrowRight"
const UP_KEY = "ArrowUp"
const DOWN_KEY = "ArrowDown"

const CHARACTER_ID = "character"
const BLOCK_ID = "block"
const JUMP_ANIMATION_CLASS = "jump-animation"
const JUMP_TIMEOUT_IN_MILLIS = 500

const animal = document.getElementById("animal")!
const block = document.getElementById("block")!

let isJumping = false

initViews()

function initViews() {
    animal.style.position = "relative"
    animal.style.left = "10px"
    animal.style.top = "150px"

    document.onkeydown = onKeyPressed
}

function onKeyPressed(event: KeyboardEvent) {
    switch(event.code) {
        case LEFT_KEY: {
            animal.style.left = (parseInt(animal.style.left) - 10) + "px"
            break
        }
        case RIGHT_KEY: {
            if (isJumping) {
                animal.style.left = (parseInt(animal.style.left) + 50) + "px"
            } else {
                animal.style.left = (parseInt(animal.style.left) + 10) + "px"
            }
            
            break
        }
        case UP_KEY: {
            jump()
            break
        }
        case DOWN_KEY: {
            animal.style.top = (parseInt(animal.style.top) + 10) + "px"
            break
        }
    }
}

function jump() {
    isJumping = true

    if (!animal.classList.contains(JUMP_ANIMATION_CLASS)) {
        animal.classList.add(JUMP_ANIMATION_CLASS)
    }
    setTimeout(onFinishJumping, JUMP_TIMEOUT_IN_MILLIS)
}

function onFinishJumping() {
    isJumping = false
    animal.classList.remove(JUMP_ANIMATION_CLASS)
}
