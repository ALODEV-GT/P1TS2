import { useEffect, useRef } from 'react';
import './Intersection.css';
import { Boundary } from './boundary';
import { Vehicle } from './vehicles';

function Intersection() {
    const canvasRef = useRef(null)
    const vehicleRef = useRef<Vehicle | null>(null);

    useEffect(() => {
        const handleKeyDown = ({ key }: KeyboardEvent) => {
            if (!vehicleRef.current) return;

            switch (key) {
                case 'ArrowUp':
                    vehicleRef.current.velocity.y = -2;
                    break;
                case 'ArrowDown':
                    vehicleRef.current.velocity.y = 2;
                    break;
                case 'ArrowLeft':
                    vehicleRef.current.velocity.x = -2;
                    break;
                case 'ArrowRight':
                    vehicleRef.current.velocity.x = 2;
                    break;
            }
        };

        const handleKeyUp = ({ key }: KeyboardEvent) => {
            if (!vehicleRef.current) return;

            switch (key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    vehicleRef.current.velocity.y = 0;
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                    vehicleRef.current.velocity.x = 0;
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
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

        vehicleRef.current = new Vehicle(ctx, { x: 365, y: 670 }, { x: 0, y: 0 });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            boundaries.forEach(boundary => boundary.draw());

            if (vehicleRef.current) {
                vehicleRef.current.update();
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