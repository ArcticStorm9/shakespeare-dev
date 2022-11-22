<script lang="ts">
    import "../app.css";
</script>

<nav class="flex justify-center w-full absolute top-0 text-xl font-semibold bg-gradient-to-b from-gray-900 text-white z-20">
    <a
        href="/"
        class="w-48 h-16 font-rubik text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-600"
    >
        <span>
            Home
        </span>
    </a>
    <a
        href="/blog"
        class="w-48 h-16 font-rubik text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-600"
    >
        <span>
            Blog
        </span>
    </a>
    <a
        href="/contact"
        class="w-48 h-16 font-rubik text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-600"
    >
        <span>
            Contact
        </span>
    </a>
    <a
        href="/about"
        class="w-48 h-16 font-rubik text-2xl grid justify-center content-center hover:bg-gradient-to-b hover:from-gray-800 hover:font-bold hover:text-rose-600"
    >
        <span>
            About
        </span>
    </a>
</nav>
<div class="w-full bg-gray-900 text-white font-rubik">
<slot />
</div>