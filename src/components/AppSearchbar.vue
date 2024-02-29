<script>
import { state } from '../state';

export default {
    name: 'AppSearchbar',
    data() {
        return {
            state,
            movieSearched: '',
            classToggle: 'hidden'
        }
    },
    methods: {

        ricercaMovie() {
            if (this.movieSearched != '') {
                state.movies = [];
                state.base_api_urls.forEach(url => {
                    const newResearch = `${url}${this.movieSearched}`;
                    state.fetchData(newResearch);
                })
            }
        },
        toggleSearchbar() {
            const searchbar = document.getElementById('searchbar');
            searchbar.classList.toggle('hidden');
            searchbar.classList.toggle('visible')
        }
    }
}
</script>
<template>
    <div class="d-flex justify-content-between align-items-center research">
        <input @keyup.enter="ricercaMovie" v-model="movieSearched" type="search" id="searchbar"
            placeholder="Movies, series and..." :class="classToggle">
        <i @click="toggleSearchbar" class="fa-solid fa-magnifying-glass" id="toogleSearchbar"></i>
    </div>
</template>
<style scoped>
.research {

    i {
        color: var(--acid-green);

    }

    i:hover {
        color: var(--pure-white);
    }

    & #searchbar {
        transition: all 0.8s ease-in-out;
    }

    .visible {
        visibility: visible;
        max-width: 300px;
        border-radius: 5px;
    }

    .hidden {
        visibility: hidden;
        max-width: 0;
    }



}
</style>