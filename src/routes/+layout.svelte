<script lang="ts">
    import "../app.css";
</script>

<nav class="flex justify-center w-full absolute top-0 text-xl font-semibold bg-gradient-to-b from-gray-900 text-gray-100 z-20">
    <a
        href="/"
        class="w-48 h-16 font-rubik text-xl xl:text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-500"
    >
        Home
    </a>
    <a
        href="/projects"
        class="w-48 h-16 font-rubik text-xl xl:text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-500"
    >
        Projects
    </a>
    <a
        href="/contact"
        class="w-48 h-16 font-rubik text-xl xl:text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-500"
    >
        Contact
    </a>
    <a
        href="/about"
        class="w-48 h-16 font-rubik text-xl xl:text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-500"
    >
        About
    </a>
</nav>
<div class="w-full bg-gray-900 text-gray-100 font-rubik">
<slot />
</div>