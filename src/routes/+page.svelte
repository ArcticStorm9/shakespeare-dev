<script lang="ts">
    import Particles from '$lib/Particles.svelte'
    import Card from '$lib/Card.svelte';

    type InfoCard = {
        img: string;
        title: string;
        desc: string;
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

<section class="grid gap-5 h-[40rem] relative justify-center content-center cursor-default">
    <h1 class="text-8xl lg:text-9xl text-center font-rubik font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400 z-10">
        Ian <span class="md:hidden">S.</span><span class="hidden md:inline">Shakespeare</span>
    </h1>
    <h2 class="text-3xl md:text-5xl font-semibold text-center z-10">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400">
            {randomNumber}
        </span>
        commits, and still going
    </h2>
    <Particles width={'full'} height={640} numOfParticles={50} shapeOfParticles={'circle'} minRadius={10} maxRadius={50} />
</section>
<div class="flex justify-center gap-2 w-full h-full py-12">
    {#each infoCards as infoCard}
        <Card imageSrc={infoCard.img} title={infoCard.title} description={infoCard.desc} />
    {/each}
</div>