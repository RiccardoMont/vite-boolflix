<script>
import { state } from '../state';


export default {
    name: 'AppMain',
    data() {
        return {
            state,
            initial_url_api: ''
        }
    },
    methods: {
        initialApi() {
            
            state.base_api_urls.forEach(url => {
                console.log(url)
                const newResearch = `${url}troy`;
                this.initial_url_api = newResearch;
                state.fetchData(this.initial_url_api);
            })
            
        }
    },
    components: {

    },
    mounted() {
        
        this.initialApi()
        state.fetchLangtoFlag(state.translations_api_url);
        state.fetchLanguages(state.lang_api_url);
    },



}

</script>
<template>
    <ul>
        <li v-for="movie in state.movies">
            <h3>{{ movie.title || movie.name }}</h3>
            <i>{{ movie.original_title || movie.original_name }}</i>
            <br>
            <span v-if="state.LtoF[movie.original_language] !== undefined"
                :class="'fi fi-' + state.LtoF[movie.original_language]"></span>
            <h5 v-else>Language: {{ state.objLangNoFlag[movie.original_language] }}</h5>

            <br>
            <strong>{{ movie.vote_average }}</strong>

        </li>

    </ul>
</template>
<style></style>