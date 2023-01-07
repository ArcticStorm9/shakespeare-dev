<script lang='ts'>
    import { fly } from 'svelte/transition';
    import RadialHover from "./RadialHover.svelte";

    let focusPoint: number | null = null;
    const points = [
        {
            title: 'Projects',
            altTitle: 'Personal Projects',
            description:
                `The backbone of any engineer's portfolio is, well, the engine!
                While I've never built an engine per se, I have made plenty of software.
                Most of my projects are mobile and web apps, though there is the
                occasional game or system.`,
            items: [
                {
                    text: 'SvelteKit Planner/Todo App',
                    href: 'https://github.com/ArcticStorm9/myplanner'
                },
                {
                    text: 'OpenGL Flappy Bird Clone',
                    href: 'https://github.com/ArcticStorm9/flappy-bird-glut'
                },
                {
                    text: 'Django Predecessor Tool',
                    href: 'https://github.com/ArcticStorm9/django-project'
                },
                {
                    text: 'C File System',
                    href: 'https://github.com/ArcticStorm9/file-system'
                },
                {
                    text: 'Unity MOBA',
                    href: 'https://github.com/ArcticStorm9/MOBA'
                }
            ],
            cta: {
                text: 'See full project list on GitHub >',
                href: 'https://github.com/ArcticStorm9'
            }
        },
        {
            title: 'Experience',
            altTitle: 'Work Experience',
            description: 'Test2',
            items: [

            ],
            cta: {
                text: '',
                href: ''
            }
        },
        {
            title: 'Education',
            altTitle: 'Academic Achievements',
            description: 'Test3',
            items: [

            ],
            cta: {
                text: '',
                href: ''
            }
        },
        {
            title: 'Technologies',
            altTitle: 'Known Technologies',
            description: 'Test4',
            items: [

            ],
            cta: {
                text: '',
                href: ''
            }
        }
    ];
    
    const setHoverActiveIndex = (index: number) => {
        const menu: HTMLElement = document.querySelector('#menu')!;
        menu.dataset.activeIndex = String(index);
    }
</script>

<section id='menu' class='grid gap-4 w-min pl-16'>
    <h1 class='relative z-20 text-4xl text-white opacity-30 font-righteous duration-300 cursor-pointer hover:opacity-100 hover:text-sky-500'>
        Ian Shakespeare
    </h1>
    <ul class='group grid gap-4 justify-start w-min relative z-20 text-gray-100'>
        {#each points as p, i}
            <li
                on:mouseover={() => setHoverActiveIndex(i)}
                on:focus={() => setHoverActiveIndex(i)}
                on:click={() => focusPoint = i}
                class={`h-16 duration-300 ease-in-out cursor-pointer group-hover:opacity-30 ${focusPoint == i ? 'text-gradient' : ''}`}
            >
                <h2 class='text-6xl'>
                    {p.title}
                </h2>
                {#if focusPoint == i}
                    <div
                        transition:fly={{ x: 400, duration: 1000 }}
                        class='fixed flex items-center w-[calc(100%)] h-full right-0 top-0 text-gray-100 bg-gradient-to-r from-transparent to-black bg-opacity-70'
                    >
                        <div on:click={(e) => { e.stopPropagation(); focusPoint = null }} class='w-1/2 h-full' />
                        <RadialHover containerStyles='flex items-center w-1/2 h-full bg-gray-900 border-l-2 border-gray-800 p-8'>
                            <div class='grid gap-8 relative z-10'>
                                <h3 class='text-3xl'>
                                    {p.altTitle}
                                </h3>
                                <p>
                                    {p.description}
                                </p>
                                <ul class='grid grid-cols-2 gap-x-4 gap-y-2'>
                                    {#each p.items as item}
                                        <a href={item.href} target='_blank' class='flex gap-1 before:text-sky-500 before:content-["•"]'>
                                            {item.text}
                                        </a>
                                    {/each}
                                </ul>
                                <a href={p.cta.href} class='justify-self-center'>
                                    {p.cta.text}
                                </a>
                            </div>
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