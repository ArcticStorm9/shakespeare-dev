<script lang="ts">
    import RadialHover from "./RadialHover.svelte";
    import { slide } from 'svelte/transition'

    type InfoCard = {
        id: number;
        icon: string;
        title: string;
        points: string[];
        desc: string;
    };

    let selectedCard: number | null = null;

    const infoCards: InfoCard[] = [
        {
            id: 0,
            icon: "fa-solid fa-pen-ruler",
            title: "Projects",
            points: [

            ],
            desc: ``,

        },
        {
            id: 1,
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
                I also have experience in software testing.`
        },
        {
            id: 2,
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
                and "Service Learning" award recipient.`
        },
        {
            id: 3,
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
                Swift with iOS, or just plain old C.`
        }
    ];
</script>

<div class="grid justify-center md:grid-cols-[auto_auto] gap-6 w-full h-full py-4 md:text-gray-400 relative">
    {#each infoCards as infoCard}
        <RadialHover containerStyles={`${selectedCard == infoCard.id ? 'w-72' : 'w-72'} xl:basis-80 shadow-lg duration-300 hover:text-gray-100`}>
            <div
                class="grid p-8 gap-4 radial-hover text-center text-sm xl:text-md rounded-lg border-2 border-gray-800 z-10"
                on:click={() => selectedCard = infoCard.id}
            >
                <div class="grid gap-3">
                    <i class={`${infoCard.icon} fa-4x text-rose-500 h-16`} />
                    <h1 class="font-bold text-2xl">
                        {infoCard.title}
                    </h1>
                </div>
                {#if selectedCard == infoCard.id}
                    <div class="absolute w-full h-full bg-purple-400" transition:slide>
                        <button on:click={(e) => {e.stopPropagation(); selectedCard = null}}>Close</button>
                        {infoCard.desc}
                    </div>
                {/if}
            </div>
        </RadialHover>
    {/each}
</div>