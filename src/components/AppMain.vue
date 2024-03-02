<script>
import { state } from '../state';
import AppCardMovie from './AppCardMovie.vue';


export default {
    name: 'AppMain',
    data() {
        return {
            state,
            initial_url_api: '',
            isMounted: false
        }
    },
    methods: {
        initialApi() {
            state.base_api_urls.forEach(url => {
                const newResearch = `${url}troy`;
                this.initial_url_api = newResearch;
                state.fetchData(this.initial_url_api);
            })

        }
    },
    components: {
        AppCardMovie
    },
    mounted() {
        this.initialApi();
        state.fetchLangtoFlag(state.translations_api_url);
        state.fetchLanguages(state.lang_api_url);
        this.isMounted = true;

    },



}

</script>
<template>
    <div class="container">
        <div class="row">
            <AppCardMovie v-if="isMounted" v-for="movie in state.movies" :movie="movie" class="cardMovie col-3">
            </AppCardMovie>
        </div>
    </div>
</template>
<style scoped>

.row {
    flex-wrap: wrap;
}

.cardMovie {

    width: calc((100%/12)*3 - 2rem);
    margin: 1rem;
    overflow: hidden;

}
</style>