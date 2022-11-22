<script lang="ts">
    import Particles from '$lib/Particles.svelte';

    type InfoCard = {
        icon: string;
        title: string;
        points: string[];
        desc: string;
    }

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
        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
    }

    const randomNumber = Math.floor(Math.random() * 100);

    const infoCards: InfoCard[] = [
        {
            icon: "fa-solid fa-user-graduate",
            title: "Education",
            points: [
                "Utah Tech University Graduate",
                "Bachelor in Computer Science",
                "Associate in General Studies",
                "Honor Roll Student",
            ],
            desc: "As a graduate from Utah Tech University, I have hands on experience building all sorts of apps. From simple Python games to C-written file systems, I've worked on dozens of projects during my time in school."
        },
        {
            icon: "fa-solid fa-code",
            title: "Technologies",
            points: [
                "TypeScript",
                "JavaScript",
                "Python",
                "C/C++",
                "Swift",
                "Golang"
            ],
            desc: ""
        },
        {
            icon: "fa-solid fa-briefcase",
            title: "Work",
            points: [
                "point 1",
                "point 2",
                "point 3",
                "point 4",
            ],
            desc: "there is in fact a cat"
        }
    ]
</script>

<svelte:head>
    <title>Home | Ian Shakespeare</title>
</svelte:head>
<div class="grid gap-5 h-[40rem] relative justify-center content-center cursor-default">
    <h1 class="text-8xl lg:text-9xl text-center font-righteous font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-700 z-10">
        Ian <span class="md:hidden">S.</span><span class="hidden md:inline">Shakespeare</span>
    </h1>
    <h2 class="text-3xl md:text-5xl font-semibold text-center z-10">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500">
            {randomNumber}
        </span>
        commits, and still going
    </h2>
    <Particles
        width={'full'} 
        height={640}
        numOfParticles={50}
        shapeOfParticles={'circle'}
        colors={['#4b5563', '#374151', '#1f2937']}
        minRadius={10}
        maxRadius={50}
        maxSpeed={2.5}
    />
</div>
<div class="mx-30">
    <div class="flex flex-wrap justify-center gap-8 w-full h-full py-8 text-gray-100">
        {#each infoCards as infoCard}
            <section
                class="grid basis-80 p-8 gap-4 radial-hover text-center rounded-lg border-2 border-gray-800 hover:shadow-lg duration-300"
                on:mousemove={handleMouseMove}
            >
                <i class={`${infoCard.icon} fa-4x text-rose-600`}></i>
                <h1 class="font-bold text-2xl">
                    {infoCard.title}
                </h1>
                <hr class="border-gray-700" />
                <ul class="text-left list-disc pl-4">
                    {#each infoCard.points as p}
                        <li>{p}</li>
                    {/each}
                </ul>
                <hr class="border-gray-700" />
                <p class="text-justify">
                    {infoCard.desc}
                </p>
            </section>
        {/each}
    </div>
</div>