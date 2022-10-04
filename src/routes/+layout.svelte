<script lang="ts">
    import "../app.css";
</script>

<nav class="flex justify-center bg-neutral-800 text-white z-20">
<a
    href="/"
    class="w-48 h-16 grid justify-center content-center text-xl font-semibold hover:bg-neutral-700 hover:font-bold hover:text-sky-400 ease-in-out duration-100"
>
    <span>
        Home
    </span>
</a>
<a
    href="/blog"
    class="w-48 h-16 grid justify-center content-center text-xl font-semibold hover:bg-neutral-700 hover:font-bold hover:text-sky-400 ease-in-out duration-100"
>
    <span>
        Blog
    </span>
</a>
<a
    href="/"
    class="w-48 h-16 grid justify-center content-center text-xl font-semibold hover:bg-neutral-700 hover:fontbold hover:text-sky-400 ease-in-out duration-100"
>
    <span>
        Contact
    </span>
</a>
<a
    href="/"
    class="w-48 h-16 grid justify-center content-center text-xl font-semibold hover:bg-neutral-700 hover:font-bold hover:text-sky-400 ease-in-out duration-100"
>
    <span>
        About
    </span>
</a>
</nav>
<div class="w-full h-full bg-neutral-900 text-white font-rubik -z-20">
<slot />
</div>