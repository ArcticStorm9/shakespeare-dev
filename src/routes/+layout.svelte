<script lang="ts">
    import "../app.css";
</script>

<nav class="flex justify-center w-full absolute top-0 text-xl font-semibold bg-gradient-to-b from-gray-900 text-gray-100 z-20">
    <a
        href="/"
        class="nav-item"
    >
        <span>
            Home
        </span>
    </a>
    <a
        href="/projects"
        class="nav-item"
    >
        <span>
            Projects
        </span>
    </a>
    <a
        href="/contact"
        class="nav-item"
    >
        <span>
            Contact
        </span>
    </a>
    <a
        href="/about"
        class="nav-item"
    >
        <span>
            About
        </span>
    </a>
</nav>
<div class="w-full bg-gray-900 text-gray-100 font-rubik">
<slot />
</div>