<script lang='ts'>
    const points = ['Projects', 'Experience', 'Education', 'Technologies'];

    let focusPoint: number | null = null;
    
    const setActiveIndex = (index: number) => {
        const menu: HTMLElement = document.querySelector('#menu')!;
        menu.dataset.activeIndex = String(index);
    }
</script>

<section id='menu'>
    <ul class='group grid justify-start w-min relative z-10 text-gray-100 ml-16'>
        {#each points as p, i}
            <li
                on:mouseover={() => setActiveIndex(i)}
                on:focus={() => setActiveIndex(i)}
                on:click={() => focusPoint = i}
                class={`h-28 text-8xl duration-300 ease-in-out group-hover:opacity-30 ${focusPoint == i ? 'text-gradient' : ''}`}
            >
                {p}
            </li>
        {/each}
    </ul>
    <div />
</section>

<style>
    ul > li:hover {
        opacity: 1;
    }

    #menu > div {
        height: 100%;
        width: 100%;

        background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 9%,
            transparent 9%
        );
        background-position: 0% 0%;
        background-size: 12vmin 12vmin;

        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 5;

        transition: opacity 800ms ease,
            background-size 800ms ease,
            background-position 800ms ease;
    }

    ul:hover ~ div {
        background-size: 11vmin 11vmin;
        opacity: 0.5;
    }

    :global(#menu[data-active-index='0']) > div {
        background-position: 0% -25%;
    }

    :global(#menu[data-active-index='1']) > div {
        background-position: 0% -50%;
    }

    :global(#menu[data-active-index='2']) > div {
        background-position: 0% -75%;
    }

    :global(#menu[data-active-index='3']) > div {
        background-position: 0% -100%;
    }
</style>