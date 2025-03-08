export class Vehicle {
    static WIDTH: number = 24;
    static HEIGHT: number = 24;

    canvasCtx: CanvasRenderingContext2D;
    position: { x: number; y: number };
    route: string
    speed: number;

    constructor(canvasCtx: CanvasRenderingContext2D, speed: number, route: string) {
        this.canvasCtx = canvasCtx;
        this.route = route;
        this.position = this.getStartPosition()
        this.speed = speed * 40 / 3600; // convert speed from km/h to pixels per frame
    }

    move() {
        const { x, y } = this.position;
        const { speed } = this;

        // Funciones auxiliares para mover en cada dirección
        const moveUp = () => (this.position.y -= speed);
        const moveDown = () => (this.position.y += speed);
        const moveLeft = () => (this.position.x -= speed);
        const moveRight = () => (this.position.x += speed);

        // Mapeo de rutas a sus comportamientos
        const routeActions: any = {
            A: () => (y > 365 ? moveUp() : moveRight()),
            B: () => moveUp(),
            C: () => (y > 330 ? moveUp() : moveLeft()),
            D: () => (x < 330 ? moveRight() : moveDown()),
            E: () => moveRight(),
            F: () => (x < 365 ? moveRight() : moveUp()),
            G: () => (y < 330 ? moveDown() : moveLeft()),
            H: () => moveDown(),
            I: () => (y < 365 ? moveDown() : moveRight()),
            J: () => (x > 365 ? moveLeft() : moveUp()),
            K: () => moveLeft(),
            L: () => (x > 330 ? moveLeft() : moveDown()),
        };

        const action = routeActions[this.route];
        if (action) {
            action();
        }
    }

    draw() {
        this.canvasCtx.fillStyle = 'red';
        this.canvasCtx.fillRect(this.position.x, this.position.y, Vehicle.WIDTH, Vehicle.HEIGHT);
    }

    getStartPosition() {
        const positions: { [key: string]: { x: number; y: number } } = {
            A: { x: 365, y: 670 },
            B: { x: 365, y: 670 },
            C: { x: 365, y: 670 },
            D: { x: 10, y: 365 },
            E: { x: 10, y: 365 },
            F: { x: 10, y: 365 },
            G: { x: 330, y: 10 },
            H: { x: 330, y: 10 },
            I: { x: 330, y: 10 },
        };

        return positions[this.route] ?? { x: 670, y: 330 };
    }
}
