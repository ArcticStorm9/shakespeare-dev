<script lang="ts">
    import "../app.css";
</script>

<nav class="flex justify-center bg-neutral-800 text-white z-20">
<a href="/" class="w-32 h-16 grid justify-center content-center uppercase hover:bg-neutral-600">
    <span>
        Home
    </span>
</a>
<a href="/blog" class="w-32 h-16 grid justify-center content-center uppercase hover:bg-neutral-600">
    <span>
        Blog
    </span>
</a>
<a href="/" class="w-32 h-16 grid justify-center content-center uppercase hover:bg-neutral-600">
    <span>
        Contact
    </span>
</a>
<a href="/" class="w-32 h-16 grid justify-center content-center uppercase hover:bg-neutral-600">
    <span>
        About
    </span>
</a>
</nav>
<div class="w-full h-full bg-neutral-900 text-white font-rubik -z-20">
<slot />
</div>