<script lang="ts">
    import "../app.css";
</script>

<nav class="flex justify-center w-full absolute top-0 bg-gradient-to-b from-neutral-900 text-white z-20">
<a
    href="/"
    class="w-48 h-16 grid justify-center content-center text-xl hover:text-2xl font-semibold hover:bg-gradient-to-b hover:from-neutral-800 hover:font-bold hover:text-blue-500 duration-500"
>
    <span>
        Home
    </span>
</a>
<a
    href="/blog"
    class="w-48 h-16 grid justify-center content-center text-xl hover:text-2xl font-semibold hover:bg-gradient-to-b hover:from-neutral-800 hover:font-bold hover:text-sky-500 duration-500"
>
    <span>
        Blog
    </span>
</a>
<a
    href="/"
    class="w-48 h-16 grid justify-center content-center text-xl hover:text-2xl font-semibold hover:bg-gradient-to-b hover:from-neutral-800 hover:font-bold hover:text-sky-500 duration-500"
>
    <span>
        Contact
    </span>
</a>
<a
    href="/"
    class="w-48 h-16 grid justify-center content-center text-xl hover:text-2xl font-semibold hover:bg-gradient-to-b hover:from-neutral-800 hover:font-bold hover:text-sky-400 duration-500"
>
    <span>
        About
    </span>
</a>
</nav>
<div class="w-full bg-neutral-900 text-white font-rubik -z-20">
<slot />
</div>