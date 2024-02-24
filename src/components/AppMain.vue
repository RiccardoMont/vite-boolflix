<script>
import { state } from '../state';
//import LangFlag from 'vue-lang-code-flags';

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
        state.fetchLang(state.translations_api_url);
    }


}

</script>
<template>
    <ul>
        <li v-for="movie in state.movies">
            <h3>{{ movie.title }}</h3>
            <i>{{ movie.original_title }}</i>
            <br>
            <span v-if="state.LtoF[movie.original_language] !== undefined"
                :class="'fi fi-' + state.LtoF[movie.original_language]"></span>
            <h5 v-else>Language: {{ movie.original_language }}</h5>
            <br>
            <strong>{{ movie.vote_average }}</strong>

        </li>

    </ul>
</template>
<style></style>