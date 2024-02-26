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
                const newResearch = `${url}troy`;
                this.initial_url_api = newResearch;
                state.fetchData(this.initial_url_api);
            })
            
        }
    },
    components: {

    },
    mounted() {
        this.initialApi();
        state.fetchLangtoFlag(state.translations_api_url);
        state.fetchLanguages(state.lang_api_url);
        
    },



}

</script>
<template>
    <ul>
        <li v-for="movie in state.movies">
            <h3>{{ movie.title || movie.name }}</h3>
            <p>{{ movie.original_title || movie.original_name }}</p>
            <br>
            <img v-if="movie.poster_path !== null" :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path" alt="">
            <img v-else src="../assets/locandina-generica.png" alt="">
            <br>
            <span v-if="state.LtoF[movie.original_language] !== undefined"
                :class="'fi fi-' + state.LtoF[movie.original_language]"></span>
            <h5 v-else>Language: {{ state.objLangNoFlag[movie.original_language] }}</h5>

            <br>
            <strong>{{ Math.ceil(movie.vote_average/2) }}</strong>
            <i v-for="starSolid in Math.ceil(movie.vote_average/2)" class="fa-solid fa-star"></i>
            <i v-for="starRegular in (5 - Math.ceil(movie.vote_average/2))"  class="fa-regular fa-star"></i>
             
        </li>

    </ul>
</template>
<style scoped>

img{
    width: 185px;
}

i {
    color: rgb(253, 224, 62);
}
</style>