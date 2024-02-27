<script>

export default {
    name: 'AppNav',
    data() {
        return {

        }
    }
}
</script>
<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>Serie Tv</li>
            <li>Film</li>
            <li>Nuovi e popolari</li>
            <li>Per te</li>
        </ul>
    </nav>
</template>
<style scoped>
ul {
    display: flex;
    list-style: none;
    gap: 1rem;

    & li {
        padding: 1.5rem;
        cursor: pointer;
        font-weight: 600;
        color: var(--pure-white);
    }
}
</style>