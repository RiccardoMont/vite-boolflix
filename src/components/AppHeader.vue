<script>
import { state } from '../state';
import AppSearchbar from './AppSearchbar.vue';
import AppLogo from './AppLogo.vue';
import AppNav from './AppNav.vue';

export default {
    name: 'AppHeader',
    data() {
        return {

        }
    },
    components: {
        AppLogo,
        AppNav,
        AppSearchbar
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-between align-items-center">
                <AppLogo></AppLogo>
                <AppNav></AppNav>
            </div>
            <AppSearchbar></AppSearchbar>
        </div>
    </div>
</template>
<style scoped>

.container{
    max-width: 1440px;
}

.row {
    justify-content: space-between;
}



</style>