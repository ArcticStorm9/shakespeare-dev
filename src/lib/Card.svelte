<script lang="ts">
    export let imageSrc: string;
    export let title: string;
    export let description: string;

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
</script>

<div 
    class="w-80 h-96 bg-neutral-800 rounded-lg relative"
    on:mousemove={handleMouseMove}>
    <section
        class="card grid grid-rows-3 m-0.5 h-[calc(100%-4px)] w-[calc(100%-4px)] bg-neutral-900 rounded-lg relative"
        on:mousemove={handleMouseMove}>
        <img
            class="w-full h-full rounded-tl-lg rounded-tr-lg"
            alt="cat"
            src={imageSrc}/>
        <h1>{title}</h1>
        <p>{description}</p>
        <i class="fa-regular fa-user"></i>
    </section>
</div>

<style>
    .card::before {
        opacity: 0;
        background: radial-gradient(
            50rem circle at var(--mouse-x) var(--mouse-y),
            rgba(255,255,255,0.04),
            transparent 50%
        );
        border-radius: inherit;
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .card:hover::before {
        opacity: 1;
    }
    img {
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.7)), to(rgba(0,0,0,0)))
    }
</style>