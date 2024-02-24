<script>
import { state } from '../state';
//import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'AppMain',
    data() {
        return {
            state,
            //Proprietà d'appoggio per poter scrivere in pagina il nome della lingua nel caso di assenza della bandiera
            langNoFlag: ''
        }
    },
    methods: {
        //Cerco nell'array di appoggio per le lingue senza bandiera. Paragono la proprietà iso_639_1 al parametro lingua e qualora il riscontro sia positivo, allora, prendo la corrispettiva proprietà 'english_name' e la salvo nella proprietà d'appoggio 'langNoFlag'
        trovalingua(lingua) {

            for (let i = 0; i < state.arrayLangNoFlag.length; i++) {

                if (state.arrayLangNoFlag[i].iso_639_1 === lingua) {

                    this.langNoFlag = state.arrayLangNoFlag[i].english_name;

                }
            }
        }
    },
    components: {

    },
    mounted() {
        state.fetchData(state.api_url);
        state.fetchLangtoFlag(state.translations_api_url);
        state.fetchLanguages(state.lang_api_url);
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
            <h5 v-else :class="trovalingua(movie.original_language)">Language: {{ this.langNoFlag }}</h5>
            <br>
            <strong>{{ movie.vote_average }}</strong>

        </li>

    </ul>
</template>
<style></style>