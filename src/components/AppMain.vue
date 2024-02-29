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
    <div class="container">
        <div class="row">
            <div v-for="movie in state.movies" class="cardMovie col-3">
                <div class="locandina">
                    <img v-if="movie.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path"
                        alt="">
                    <img v-else src="../assets/locandina-generica.png" alt="">
                    <div class="testi">
                        <div class="title">
                            <h3>{{ movie.title || movie.name }}</h3>
                        </div>
                        <div class="original_title">
                            <p>{{ movie.original_title || movie.original_name }}</p>
                        </div>
                        <div class="flag d-flex">
                            <h4>Language:</h4>
                            <span v-if="state.LtoF[movie.original_language] !== undefined"
                                :class="'fi fi-' + state.LtoF[movie.original_language]"></span>
                            <p v-else> {{ state.objLangNoFlag[movie.original_language] }}</p>
                        </div>
                        <div class="stars">
                            <i v-for="starSolid in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star"></i>
                            <i v-for="starRegular in (5 - Math.ceil(movie.vote_average / 2))"
                                class="fa-regular fa-star"></i>
                        </div>
                        <div v-if="movie.overview" class="trama">
                            <p>{{ movie.overview }}</p>
                        </div>
                        <div v-else>
                            <p>No plot available</p>
                        </div>
                    </div>
                </div>
            </div>
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

    & .locandina {

        width: 250px;
        height: 345px;
        overflow: hidden;
        border: 2px solid var(--pure-white);
        box-shadow: 10px 0px 20px var(--acid-green);
        position: relative;


        img {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 10;
            left: 0;
        }

        & .testi {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            color: var(--pure-white);

            & .flag {
                & span{
                    margin: 0 0.5rem;
                }
                & p{
                    margin: 0 0.5rem;
                }
            }

            & .stars {
                color: rgb(253, 224, 62)
            }

            & .trama {
                max-height: 200px;
                overflow-y: scroll;
            }

            & ::-webkit-scrollbar {
                width: 5px;
            }
        }

    }



    & .locandina:hover {

        border: 2px solid var(--acid-green);
        box-shadow: 10px 0px 20px var(--pure-white);
        transition: all 0.8s ease-in-out;

        & img {
            left: -250px;
            transition: all 0.8s ease-in-out;

        }

    }

}


</style>