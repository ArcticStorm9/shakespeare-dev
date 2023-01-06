<script lang="ts">
    import Particles from "./Particles.svelte";
</script>

<div class="w-screen h-screen absolute inset-0 cursor-default">
    <Particles
        width={'full'}
        height={'full'}
        numOfParticles={50}
        shapeOfParticles={'circle'}
        colors={['#374151', '#1f2937']}
        minRadius={10}
        maxRadius={50}
        maxSpeed={2.5}
    />
</div>