export class Boundary {
    static WIDTH: number = 80
    static HEIGHT: number = 80

    canvasCtx: CanvasRenderingContext2D
    position: any

    constructor(canvasCtx: CanvasRenderingContext2D, position: any) {
        this.position = position
        this.canvasCtx = canvasCtx
    }

    draw() {
        this.canvasCtx.fillStyle = 'green'
        this.canvasCtx.fillRect(this.position.x, this.position.y, Boundary.WIDTH, Boundary.HEIGHT)
    }

}