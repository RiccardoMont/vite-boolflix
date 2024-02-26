<script>
import { state } from '../state';


export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    methods: {

    },
    components: {

    },
    mounted() {
        state.fetchData(state.api_url);
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