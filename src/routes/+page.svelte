<script lang="ts">
    import Hero from '$lib/Hero.svelte';
    import RadialHover from '$lib/RadialHover.svelte';

    type InfoCard = {
        icon: string;
        title: string;
        points: string[];
        desc: string;
        href: string;
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
            desc: `As a graduate from Utah Tech University,
                I have hands on experience building all sorts of apps.
                From simple Python games to C-written file systems,
                I've worked on dozens of group and individual projects throughout university.
                I am a "Dixie Spirit" award finalist,
                and "Service Learning" award recipient.`,
            href: "/about#education"
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
            desc: `Learning technologies is my favorite part of Software Development!
                I've had exposure to a broad range of technologies.
                Whether it be React with NextJS,
                C++ with GLUT, Python with TensorFlow,
                Swift with iOS, or just plain old C.`,
            href: "/about#technologies"
        },
        {
            icon: "fa-solid fa-briefcase",
            title: "Experience",
            points: [
                "Full Stack Development Intern",
                "University C.S. Tutor",
                "Software Internal Tester",
            ],
            desc: `Being a Full Stack Web Developer,
                most of my professional experience is with TypeScript, JavaScript, and Golang.
                I've worked on several large projects with NextJS frontends and Goland HTTPS backends.
                In addition to this, I've worked as a University level Computer Science Teaching Assistant and Tutor.
                I also have experience in software testing.`,
            href: "/about#work"
        }
    ]
</script>

<svelte:head>
    <title>Home | Ian Shakespeare</title>
</svelte:head>

<Hero />
<div class="px-30">
    <div class="flex flex-wrap justify-center gap-6 w-full h-full py-4 md:text-gray-400">
        {#each infoCards as infoCard}
            <RadialHover containerStyles="basis-72 xl:basis-80 shadow-lg duration-300 hover:text-gray-100">
                <a
                    href={infoCard.href}
                    class="grid p-8 gap-4 radial-hover text-center text-sm xl:text-md rounded-lg border-2 border-gray-800"
                    on:mousemove={handleMouseMove}
                >
                    <div class="grid gap-3">
                        <i class={`${infoCard.icon} fa-4x text-rose-500 h-16`} />
                        <h1 class="font-bold text-2xl">
                            {infoCard.title}
                        </h1>
                    </div>
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
                </a>
            </RadialHover>
        {/each}
    </div>
</div>