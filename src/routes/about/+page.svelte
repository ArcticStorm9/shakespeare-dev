<script lang="ts">
    import Particles from "$lib/Particles.svelte";
</script>

<svelte:head>
    <title>About | Ian Shakespeare</title>
</svelte:head>

<div class="w-full h-[640px] relative bg-gradient-to-t from-emerald-200 to-emerald-400">
    <Particles
        width="full"
        height={640}
        numOfParticles={1}
        shapeOfParticles={'circle'}
        colors={['#e11d48']}
        minRadius={50}
        maxRadius={50}
        maxSpeed={2.5}
    />
    <div class="w-full h-1/3 bg-gradient-to-t from-emerald-400 to-emerald-600 bottom-0 absolute" />
</div>