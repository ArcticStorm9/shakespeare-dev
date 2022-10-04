<script lang="ts">
    import { onMount } from 'svelte';

    export let width: number | 'full';
    export let height: number | 'full';
    export let top: string;

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

    const generateParticle = (s: Shape, c: HTMLCanvasElement): Particle => {
        const maxRadius = 150;
        const minRadius = 75;
        const maxSpeed = 4;
        const possibleColors = ['#404040', '#333333', '#262626']
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
                canvas.width = window.innerWidth;
            } else {
                canvas.width = width;
            }
            if (height == 'full') {
                canvas.height = window.innerHeight;
            } else {
                canvas.height = height;
            }
        }
        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas();
        return canvas;
    }

    const initParticles = (n: number, s: Shape, c: HTMLCanvasElement): Particle[] => {
        let p: Particle[] = [];
        const r = 50;
        for (let i = 0; i < n; i++) {
            p.push(generateParticle(s, c));
        }
        return p;
    }

    const tickParticle = (c: HTMLCanvasElement, p: Particle): void => {
        const context = c.getContext("2d")!;
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

    onMount(() => {
        const canvas: HTMLCanvasElement = initCanvas();
        const ps = initParticles(10, Shape.Hexagon, canvas);
        const targetFrameRate = 30;
        let timeOfLastFrame = Date.now();

        const particlesLoop = (): void => {
            window.requestAnimationFrame(particlesLoop);

            // Wait for proper frame time
            let now: number = Date.now();
            let timeElapsed = now - timeOfLastFrame;
            if (timeElapsed > 1000 / targetFrameRate) {
                timeOfLastFrame = now - (timeElapsed % 1000 / targetFrameRate);
                canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
                ps.map((p) => tickParticle(canvas, p));
            }
        }
        particlesLoop();
    });
</script>

<canvas class="w-full absolute {top}" />