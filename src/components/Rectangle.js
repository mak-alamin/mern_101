class Rectangle {

    a = 10

    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area() {
        return this.height * this.width
    }
}

export default Rectangle;