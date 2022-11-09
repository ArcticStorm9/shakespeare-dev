<script lang="ts">
    import Particles from '$lib/Particles.svelte';

    type InfoCard = {
        img: string;
        title: string;
        desc: string;
    }

    type MouseMoveEvent = {
        currentTarget: HTMLElement;
        clientX: number;
        clientY: number;
    }

    const handleMouseMove = (event: MouseMoveEvent): void => {
        const { currentTarget: target } = event;
        const rect = target!.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }

    const randomNumber = Math.floor(Math.random() * 100);

    const infoCards: InfoCard[] = [
        {
            img: "https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg",
            title: "Cats",
            desc: "there is in fact a cat"
        },
        {
            img: "https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg",
            title: "Cats",
            desc: "there is in fact a cat"
        },
        {
            img: "https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg",
            title: "Cats",
            desc: "there is in fact a cat"
        }
    ]
</script>

<div class="grid gap-5 h-[40rem] relative justify-center content-center cursor-default">
    <h1 class="text-8xl lg:text-9xl text-center font-righteous font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400 z-10">
        Ian <span class="md:hidden">S.</span><span class="hidden md:inline">Shakespeare</span>
    </h1>
    <h2 class="text-3xl md:text-5xl font-semibold text-center z-10">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
            {randomNumber}
        </span>
        commits, and still going
    </h2>
    <Particles width={'full'} height={640} numOfParticles={50} shapeOfParticles={'circle'} minRadius={10} maxRadius={50} />
</div>
<div class="mx-40">
    <div class="grid grid-cols-3 justify-center gap-8 w-full h-full py-8">
        {#each infoCards as infoCard}
            <section class="w-full h-80 radial-hover text-center rounded-lg border-2 border-gray-800" on:mousemove={handleMouseMove}>
                <h1>{infoCard.title}</h1>
                <p>{infoCard.desc}</p>
            </section>
        {/each}
    </div>
</div>