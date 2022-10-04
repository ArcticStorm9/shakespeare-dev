<script lang="ts">
    import Particles from '$lib/Particles.svelte'

    const randomNumber = Math.floor(Math.random() * 100);

    type Card = {
        img: string,
        title: string,
        body: string,
    }

    const cards: Card[] = [
        {
            img: '',
            title: 'Education',
            body: 'Utah Tech University'
        }
    ]
</script>

<section class="grid gap-5 h-[40rem] justify-center content-center">
    <Particles width={'full'} height={640} top={'top-16'} />
    <h1 class="text-8xl font-silkscreen text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400 z-10">
        Ian Shakespeare
    </h1>
    <h2 class="text-5xl font-semibold text-center z-10">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-400">
            {randomNumber}
        </span>
        commits, and still going
    </h2>
</section>
<div class="grid">

</div>