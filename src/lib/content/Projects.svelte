<script lang='ts'>
    const data = {
        title: 'Personal Projects',
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
    };
</script>

<div class='grid gap-8 relative z-10'>
    <h3 class='text-3xl'>
        {data.title}
    </h3>
    <p>
        {data.description}
    </p>
    <ul class='grid grid-cols-2 gap-x-4 gap-y-2'>
        {#each data.items as item}
            {#if item.href}
                <a href={item.href} target='_blank' class='flex gap-1 before:text-sky-500 before:content-["•"]'>
                    {item.text}
                </a>
            {:else}
                <li class='flex gap-1 before:text-sky-500 before:content-["•"]'>
                    {item.text}
                </li>
            {/if}
        {/each}
    </ul>
    <a href={data.cta.href} class='justify-self-center'>
        {data.cta.text}
    </a>
</div>