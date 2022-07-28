export class Racer {
    constructor(name, img, number, distance) {
        this.name = name
        this.img = img
        this.number = number
        this.distance = distance
    }


    get Template() {
        return `
            <div class="col-12 bg-dark">
                <span id="${this.number}" title="${this.name}">${this.img}</span>
            </div>
    `}

    move() {
        distance >= 95
    }
}


