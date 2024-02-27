<script>


export default {
    name: 'AppLogo',
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="d-flex justify-content-between align-items-center">
        <img class="logo" src="../assets/Boolean-logo.png" alt="">
        <h1>BOOLFLIX</h1>
    </div>
</template>
<style scoped>

div{
    cursor: pointer;
}
.logo {
    width: 80px;
}

h1 {
    color: var(--acid-green);
}
</style>