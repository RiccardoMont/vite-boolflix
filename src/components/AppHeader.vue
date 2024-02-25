<script>
import { state } from '../state';

export default {
    name: 'AppHeader',
    data(){
        return{
            state,
            movieSearched: ''
        }
    },
    methods: {

        ricercaMovie(){
            if(this.movieSearched != ''){
            state.movies = [];
            const newResearch = `${state.base_api_url}${this.movieSearched}`;
            state.fetchData(newResearch);
            }
        }
    }
}
</script>
<template>
    <label for="search">Inserisci un titolo</label>
    <br>
    <input @keyup.enter="ricercaMovie" v-model="movieSearched" type="search" id="search">
    <p>{{ movieSearched }}</p>

</template>
<style>
</style>