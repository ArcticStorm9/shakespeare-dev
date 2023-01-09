<script lang='ts'>
    import { fly } from 'svelte/transition';
    import RadialHover from './RadialHover.svelte';
    import Projects from './content/Projects.svelte';
    import Experience from './content/Experience.svelte';
    import Education from './content/Education.svelte';
    import Technologies from './content/Technologies.svelte';

    let focusPoint: number | null = null;
    const points = [
        {
            title: 'Projects',
            component: Projects
        },
        {
            title: 'Experience',
            component: Experience
        },
        {
            title: 'Education',
            component: Education
        },
        {
            title: 'Technologies',
            component: Technologies
        }
    ];
    
    const setHoverActiveIndex = (index: number) => {
        const menu: HTMLElement = document.querySelector('#menu')!;
        menu.dataset.activeIndex = String(index);
    }
</script>

<section id='menu' class='grid gap-4 w-min pl-4 md:pl-16'>
    <a
        href='mailto:ian@shakespeare.dev'
        class='group relative z-20 text-4xl text-white opacity-30 font-righteous duration-300 cursor-pointer hover:opacity-100 hover:text-sky-500'
    >
        <span class='hidden md:inline group-hover:hidden'>
            Ian Shakespeare
        </span>
        <span class='inline md:hidden group-hover:inline'>
            ian@shakespeare.dev
        </span>
    </a>
    <ul class='group grid gap-4 justify-start w-min relative z-20 text-gray-100'>
        {#each points as p, i}
            <li
                on:mouseover={() => setHoverActiveIndex(i)}
                on:focus={() => setHoverActiveIndex(i)}
                on:click={() => focusPoint = i}
                class={`h-16 duration-300 ease-in-out cursor-pointer group-hover:opacity-30 ${focusPoint == i ? 'text-gradient' : ''}`}
            >
                <h2 class='text-5xl md:text-6xl'>
                    {p.title}
                </h2>
                {#if focusPoint == i}
                    <div
                        transition:fly={{ x: 400, duration: 1000 }}
                        class='fixed z-50 flex items-center w-[calc(100%)] h-full right-0 top-0 text-gray-100 bg-gradient-to-r from-transparent to-black bg-opacity-70'
                    >
                        <button on:click={(e) => { e.stopPropagation(); focusPoint = null }} class='block w-1/5 h-full md:w-1/2' />
                        <RadialHover containerStyles='flex lg:items-center w-4/5 h-full bg-gray-900 border-l-2 border-gray-800 p-8 overflow-auto md:w-1/2'>
                            <svelte:component this={p.component} />
                        </RadialHover>
                    </div>
                {/if}
            </li>
        {/each}
    </ul>
    <div class='w-full h-full absolute inset-0 z-10' />
</section>

<style>
    /* Styling effects from HyperPlexed */
    .group > li:hover {
        opacity: 1;
    }

    #menu > div {
        background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 9%,
            transparent 9%
        );
        background-position: 0% 0%;
        background-size: 12vmin 12vmin;

        transition: opacity 800ms ease,
            background-size 800ms ease,
            background-position 800ms ease;
    }

    .group:hover ~ div {
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