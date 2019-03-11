import React from "react"

let numbers = [1, 2, 3, 4]
function randomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length + 1) - 1]
}
function removeNumber(aNumber, array) {
    array.splice(array.indexOf(aNumber), 1)
}
function createRandom() {
    let aRandom = randomNumber()
    removeNumber(aRandom, numbers)
    return aRandom
}

let theImages = [
    {
        source: "./images/deathclaw.jpg",
        name: "deathclaw",
        num: 1,
        randomNum: createRandom()
    },
    {
        source: "./images/download.jpg",
        name: "brotherhood of steel",
        num: 2,
        randomNum: createRandom()

    },
    {
        source: "./images/synth.jpg",
        name: "synth",
        num: 3,
        randomNum: createRandom()
    },
    {
        source: "./images/vaultBoy.jpg",
        name: "vault boy",
        num: 4,
        randomNum: createRandom()
    }
]

let newArr = []

function numberChecker() {
    console.log(newArr)
    theImages.forEach(function (character) {
        let numberChecked = character.randomNum
        if (numberChecked === newArr.length + 1) {
            numbers.push(character.randomNumber)
            newArr.push(character)
            return character.randomNum = randomNumber()
        } else {
            theImages.forEach(function (character) {
                let numberChecked = character.randomNum
                if (numberChecked === newArr.length + 1) {
                    numbers.push(character.randomNumber)
                    newArr.push(character)
                    return character.randomNum = randomNumber()
                }
            })
        }
    })
}

function afterMath(event) {
    event.preventDefault()
    console.log("hey there")
    // newArr = []
    // console.log(newArr)
    // theImages.forEach(function (character) {
    //     let numberChecked = character.randomNum
    //     if (numberChecked === newArr.length + 1) {
    //         numbers.push(character.randomNumber)
    //         newArr.push(character)
    //         return character.randomNum = randomNumber()
    //     } else {
    //         theImages.forEach(function (character) {
    //             let numberChecked = character.randomNum
    //             if (numberChecked === newArr.length + 1) {
    //                 numbers.push(character.randomNumber)
    //                 newArr.push(character)
    //                 return character.randomNum = randomNumber()
    //             }
    //         })
    //     }
    // })
}

numberChecker()

function AnImage(props) {
    return (
        <div>
            <img alt={newArr[0].name} onClick={afterMath()} src={newArr[0].source} />
            <img alt={newArr[1].name} onClick={afterMath()} src={newArr[1].source} />
            <img alt={newArr[2].name} onClick={afterMath()} src={newArr[2].source} />
            <img alt={newArr[3].name} onClick={afterMath()} src={newArr[3].source} />
        </div>
    )
}
export default AnImage