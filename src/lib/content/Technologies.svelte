<section class='grid gap-8 relative z-10'>
    <h1 class='text-3xl'>
        Known Technologies
    </h1>
    <p>
        Learning new technologies is one of my favorite activities.
        I've worked with dozens of technologies, languages, and paradigms.
        The following is a list of technologies I've played with, from
        most to least experienced<span class='hidden md:inline'>&nbsp;&lpar;by row&rpar;</span>.
    </p>
    <ul class='grid gap-2 md:grid-cols-3'>
        {#each ['C/C++', 'TypeScript', 'Javascript',
                'React/NextJS', 'Svelte/SvelteKit', 'Python',
                'Python', 'Django', 'Go',
                'C#', 'Unity', 'Unreal'] as t}
            <li class='flex gap-1 before:text-sky-500 before:content-["•"]'>
                {t}
            </li>
        {/each}
    </ul>
</section>