<script lang="ts">
    import { onMount } from 'svelte';

    export let width: number | 'full';
    export let height: number | 'full';
    export let numOfParticles: number;
    export let shapeOfParticles: 'circle' | 'square' | 'hexagon';
    export let colors: string[];
    export let minRadius: number;
    export let maxRadius: number;
    export let maxSpeed: number;

    enum Shape {
        Circle,
        Square,
        Hexagon,
    }

    interface Particle {
        shape: Shape;
        color: string;
        radius: number;
        x: number;
        y: number;
        dx: number;
        dy: number;
    }

    const generateParticle = (s: Shape, c: HTMLCanvasElement, possibleColors: string[], minRadius: number, maxRadius: number, maxSpeed: number): Particle => {
        return {
            shape: s,
            color: possibleColors[Math.floor(Math.random() * possibleColors.length)],
            radius: (Math.random() * maxRadius) + minRadius,
            x: Math.random() * c.width,
            y: Math.random() * c.height,
            dx: Math.random() * maxSpeed,
            dy: Math.random() * maxSpeed
        }
    }

    const initCanvas = (): HTMLCanvasElement => {
        const canvas = document.querySelector('canvas')!;
        const resizeCanvas = (): void => {
            if (width == 'full') {
                canvas.width = canvas.parentElement!.clientWidth;
            } else {
                canvas.width = width;
            }
            if (height == 'full') {
                canvas.height = canvas.parentElement!.clientHeight;
            } else {
                canvas.height = height;
            }
        }
        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas();
        return canvas;
    }

    const initParticles = (n: number, c: HTMLCanvasElement, s: string): Particle[] => {
        let p: Particle[] = [];
        for (let i = 0; i < n; i++) {
            switch (s) {
                case 'circle':
                    p.push(generateParticle(Shape.Circle, c, colors, minRadius, maxRadius, maxSpeed));
                    break;
                case 'square':
                    p.push(generateParticle(Shape.Circle, c, colors, minRadius, maxRadius, maxSpeed));
                    break;
                case 'hexagon':
                    p.push(generateParticle(Shape.Hexagon, c, colors, minRadius, maxRadius, maxSpeed));
                    break;
            }
        }
        return p;
    }

    const tickParticle = (c: HTMLCanvasElement, p: Particle): void => {
        const context = c.getContext('2d')!;
        const newX = p.x + p.dx;
        const newY = p.y + p.dy;
        if (newX > c.width && p.dx > 0) {
            p.dx *= -1;
        } else if (newX < 0 && p.dx < 0) {
            p.dx *= -1;
        }
        if (newY > c.height && p.dy > 0) {
            p.dy *= -1;
        } else if (newY < 0 && p.dy < 0) {
            p.dy *= -1;
        }
        p.x += p.dx;
        p.y += p.dy;
        // Draw Particle
        switch (p.shape) {
            case Shape.Circle:
                context.beginPath();
                context.arc(newX, newY, p.radius, 0, 2 * Math.PI, false);
                context.fillStyle = p.color;
                context.fill();
                break;
            case Shape.Square:
                break;
            case Shape.Hexagon:
                const a = 2 * Math.PI / 6;
                context.beginPath();
                for (let i: number = 0; i < 6; i++) {
                    context.lineTo(p.x + p.radius * Math.cos(a * i),
                        p.y + p.radius * Math.sin(a * i));
                }
                context.closePath();
                context.fillStyle = p.color;
                context.fill();
                break;
        }
    }

    let frameTime: number = 0;
    let frameRate: number = 0;

    onMount(() => {
        const canvas: HTMLCanvasElement = initCanvas();
        const ps = initParticles(numOfParticles, canvas, shapeOfParticles);
        const targetFrameRate = 30;
        let timeOfLastFrame = Date.now();

        const particlesLoop = (): void => {
            window.requestAnimationFrame(particlesLoop);

            // Wait for proper frame time
            let now: number = Date.now();
            let timeElapsed = now - timeOfLastFrame;
            if (timeElapsed > 1000 / targetFrameRate) {
                frameTime = timeElapsed;
                frameRate = 1000 / frameTime;
                timeOfLastFrame = now - (timeElapsed % 1000 / targetFrameRate);
                canvas.getContext('2d')!.clearRect(0, 0, canvas.width, canvas.height);
                ps.map((p) => tickParticle(canvas, p));
            }
        }
        particlesLoop();
    });
</script>

<canvas class="w-full absolute" />