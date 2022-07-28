import { AppState } from "./appstate.js"

console.log(`connected`);


let racers = []

function _drawRacers() {
    let racers = AppState.racer
    let template = ''
    racers.forEach(racer => template += racer.Template)
    document.getElementById('number').innerHTML = template
}

function _moveRacers() {
    AppState.racer.forEach()
}


class RaceController {
    constructor() {
    }
    _drawRacers()

    start() {
        setInterval(_moveRacers, 100)
    }
}