import React, { Component } from "react"
import "./images.css"

let numbers = [1, 2, 3, 4]
let newArr = []
function randomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length + 1) - 1]
}
function removeNumber(aNumber, array) {
    array.splice(array.indexOf(aNumber), 1)
}
function createRandom() {
    let aRandom = randomNumber()
    console.log(aRandom)
    removeNumber(aRandom, numbers)
    return aRandom
}
function numberChecker() {
    newArr = []
    firstImage.forEach(function (character) {
        let numberChecked = character.randomNum
        if (numberChecked === newArr.length + 1) {
            newArr.push(character)
        } else {
            firstImage.forEach(function (character) {
                let numberChecked = character.randomNum
                if (numberChecked === newArr.length + 1) {
                    newArr.push(character)
                }
            })
        }
    })
}

let firstImage = [{
    source: "./images/deathclaw.jpg",
    name: "deathclaw",
    num: 1,
    randomNum: 0
},
{
    source: "./images/download.jpg",
    name: "brotherhood of steel",
    num: 2,
    randomNum: 0

},
{
    source: "./images/synth.jpg",
    name: "synth",
    num: 3,
    randomNum: 0
},
{
    source: "./images/vaultBoy.jpg",
    name: "vault boy",
    num: 4,
    randomNum: 0
}]

class AnImage extends Component {
    state = {
        anImage: [{
            source: "./images/deathclaw.jpg",
            name: "deathclaw",
            num: 1,
            randomNum: 0
        },
        {
            source: "./images/download.jpg",
            name: "brotherhood of steel",
            num: 2,
            randomNum: 0
        
        },
        {
            source: "./images/synth.jpg",
            name: "synth",
            num: 3,
            randomNum: 0
        },
        {
            source: "./images/vaultBoy.jpg",
            name: "vault boy",
            num: 4,
            randomNum: 0
        }]
    }

    createRandoms = () => {
        console.log("state: " + JSON.stringify(this.state.anImage))
        firstImage.forEach(function (images) {
            console.log(images)
            images.randomNum = createRandom()
        })
        numberChecker()
        this.setState({ anImage: newArr })
        numbers.push(1, 2, 3, 4)
    }

    render() {
        return (
            <div>
                <img className="anImage" alt={this.state.anImage[0].name} onClick={this.createRandoms} src={this.state.anImage[0].source} />
                <img className="anImage" alt={this.state.anImage[1].name} onClick={this.createRandoms} src={this.state.anImage[1].source} />
                <img className="anImage" alt={this.state.anImage[2].name} onClick={this.createRandoms} src={this.state.anImage[2].source} />
                <img className="anImage" alt={this.state.anImage[3].name} onClick={this.createRandoms} src={this.state.anImage[3].source} />
            </div>
        )
    }
}
export default AnImage


    // < img alt = { newArr[0].name } onClick = { this.createRandoms } src = { newArr[0].source } />
    //     <img alt={newArr[1].name} onClick={this.createRandoms} src={newArr[1].source} />
    //     <img alt={newArr[2].name} onClick={this.createRandoms} src={newArr[2].source} />
    //     <img alt={newArr[3].name} onClick={this.createRandoms} src={newArr[3].source} />




















// let numbers = [1, 2, 3, 4]
// function randomNumber() {
//     return numbers[Math.floor(Math.random() * numbers.length + 1) - 1]
// }
// function removeNumber(aNumber, array) {
//     array.splice(array.indexOf(aNumber), 1)
// }
// function createRandom() {
//     let aRandom = randomNumber()
//     removeNumber(aRandom, numbers)
//     return aRandom
// }

// let theImages = [
//     {
//         source: "./images/deathclaw.jpg",
//         name: "deathclaw",
//         num: 1,
//         randomNum: createRandom()
//     },
//     {
//         source: "./images/download.jpg",
//         name: "brotherhood of steel",
//         num: 2,
//         randomNum: createRandom()

//     },
//     {
//         source: "./images/synth.jpg",
//         name: "synth",
//         num: 3,
//         randomNum: createRandom()
//     },
//     {
//         source: "./images/vaultBoy.jpg",
//         name: "vault boy",
//         num: 4,
//         randomNum: createRandom()
//     }
// ]

// let newArr = []

// function numberChecker() {
//     newArr = []
//     theImages.forEach(function (character) {
//         let numberChecked = character.randomNum
//         if (numberChecked === newArr.length + 1) {
//             numbers.push(character.randomNumber)
//             newArr.push(character)
//             return character.randomNum = randomNumber()
//         } else {
//             theImages.forEach(function (character) {
//                 let numberChecked = character.randomNum
//                 if (numberChecked === newArr.length + 1) {
//                     numbers.push(character.randomNumber)
//                     newArr.push(character)
//                     return character.randomNum = randomNumber()
//                 }
//             })
//         }
//     })
// }

// function this.createRandoms {

// }


// numberChecker()
