<script lang="ts">
    import { onMount } from 'svelte';
    import Particles from "./Particles.svelte";

    const checkText = () => {
        let h1 = document.querySelector('#hero-header')!;
        let h2 = document.querySelector('#hero-subheader span')!;
        if (window.innerWidth < 768) {
            h1.innerHTML = 'Ian S.';
            h2.innerHTML = 'Dev';
        } else {
            h1.innerHTML = 'Ian Shakespeare';
            h2.innerHTML = 'Development';
        }
    }

    onMount(() => {
        checkText();
        window.addEventListener('resize', checkText, false);
    });
</script>

<div class="grid gap-5 h-[28.25rem] md:h-[35rem] relative justify-center content-center cursor-default">
    <h1
        id="hero-header"
        class="text-8xl xl:text-9xl text-center font-righteous font-semibold text-blue-gr z-10"
    >
        Ian Shakespeare
    </h1>
    <h2
        id="hero-subheader"
        class="text-3xl md:text-5xl font-semibold text-center z-10"
    >
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">
            Development
        </span>
        for the modern era
    </h2>
    <Particles
        width={'full'} 
        height={560}
        numOfParticles={50}
        shapeOfParticles={'circle'}
        colors={['#4b5563', '#374151', '#1f2937']}
        minRadius={10}
        maxRadius={50}
        maxSpeed={2.5}
    />
</div>