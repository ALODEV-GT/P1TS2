export class Vehicle {
    static WIDTH: number = 24;
    static HEIGHT: number = 24;

    canvasCtx: CanvasRenderingContext2D;
    position: { x: number; y: number };
    velocity: { x: number; y: number };

    constructor(canvasCtx: CanvasRenderingContext2D, position: { x: number; y: number }, velocity: { x: number; y: number }) {
        this.canvasCtx = canvasCtx;
        this.position = position;
        this.velocity = velocity;
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw() {
        this.canvasCtx.fillStyle = 'red';
        this.canvasCtx.fillRect(this.position.x, this.position.y, Vehicle.WIDTH, Vehicle.HEIGHT);
    }
}
