import { useEffect, useRef } from 'react';
import './Intersection.css';
import { Boundary } from './boundary';
import { Vehicle } from './vehicles';

function Intersection() {
    const canvasRef = useRef(null)
    const vehicleRef = useRef<Vehicle | null>(null);

    useEffect(() => {
        if (!vehicleRef.current) return

        setInterval(() => {
            console.log("ejecutando");
            vehicleRef.current!.move();
        }, 1);
    }, []);

    useEffect(() => {
        const canvas: any = canvasRef.current;
        if (!canvas) return;

        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        if (!ctx) return;

        const map: number[][] =
            [
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
            ];

        const canvasWidth = map[0].length * Boundary.WIDTH;
        const canvasHeight = map.length * Boundary.HEIGHT;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const boundaries: Boundary[] = [];
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                if (map[y][x] === 0) {
                    boundaries.push(new Boundary(ctx, { x: x * Boundary.WIDTH, y: y * Boundary.HEIGHT }));
                }
            }
        }

        vehicleRef.current = new Vehicle(ctx, 100, "L");

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            boundaries.forEach(boundary => boundary.draw());

            if (vehicleRef.current) {
                // vehicleRef.current.update();
                vehicleRef.current.draw();
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div className="intersection">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Intersection;