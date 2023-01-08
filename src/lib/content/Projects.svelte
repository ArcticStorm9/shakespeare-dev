<section class='grid gap-8 relative z-10'>
    <h1 class='text-3xl'>
        Personal Projects
    </h1>
    <p>
        The backbone of any engineer's portfolio is, well, the engine!
        While I've never built an engine per se, I have made plenty of software.
        Most of my projects are mobile and web apps, though there is the
        occasional game or system.
    </p>
    <ul class='grid grid-cols-2 gap-x-4 gap-y-2'>
        {#each [
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
        ] as item}
            <li class='flex gap-1 before:text-sky-500 before:content-["•"]'>
                <a href={item.href} target='_blank' class='underline'>
                    {item.text}
                </a>
            </li>
        {/each}
    </ul>
    <a href='https://github.com/ArcticStorm9' class='justify-self-center'>
        See full project list on GitHub >
    </a>
</section>