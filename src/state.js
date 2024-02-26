import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    base_api_urls: [
        'https://api.themoviedb.org/3/search/tv?api_key=c57edb92da6d3be4a161139756c3ceae&query=',
        'https://api.themoviedb.org/3/search/movie?api_key=c57edb92da6d3be4a161139756c3ceae&query='
    ],

    api_url: 'https://api.themoviedb.org/3/search/movie?api_key=c57edb92da6d3be4a161139756c3ceae&query=troy',
    base_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=c57edb92da6d3be4a161139756c3ceae&query=',
    lang_api_url: 'https://api.themoviedb.org/3/configuration/languages?api_key=c57edb92da6d3be4a161139756c3ceae',
    country_api_url: 'https://api.themoviedb.org/3/configuration/countries?api_key=c57edb92da6d3be4a161139756c3ceae',
    translations_api_url: 'https://api.themoviedb.org/3/configuration/primary_translations?api_key=c57edb92da6d3be4a161139756c3ceae',
    //Array d'appoggio per la lista di film richiesta
    movies: [],
    //Oggetto d'appoggio utilizzato per la corrispondenza tra lingua e bandiera
    LtoF: {},
    //Oggetto di appoggio utilizzato per la corrispondenza tra lingue senza bandiera e nome lingua per esteso
    objLangNoFlag: {},

    //Chiamata axios principare dove si richiede la lista dei film
    fetchData(url) {
        axios.get(url)
            .then(response => {
                response.data.results.forEach(movie => {
                    this.movies.push(movie);
                });

            })
            .catch(error => {
                console.error(error);
            })
    },
    //Chiamata axios per richiedere la lista delle traduzioni primarie (primary_translations)
    fetchLangtoFlag(url) {
        axios.get(url)
            .then(response => {
                response.data.forEach(translation => {
                    //Inserisco la sigla della lingua come nome della proprietà all'oggetto d'appoggio LtoF e gli abbino il valore della sigla della bandiera

                    const langSliced = translation.slice(0, 2);
                    const flagSliced = translation.slice(3, 5).toLowerCase();
                    this.LtoF[langSliced] = flagSliced;
                });

                //Richiamo la funzione per correggere alcune bandiere
                this.adjustmentFlag();

            })
            .catch(error => {
                console.error(error);
            })

    },
    //Molte lingue hanno più bandiere di riferimento ed il ciclo avrebbe preso le ultime in ordine di lista. Per evitare questo ho abbinato ad ogni lingua la propria bandiera principale
    adjustmentFlag() {
        this.LtoF.ar = 'ae';
        this.LtoF.bs = 'ba';
        this.LtoF.de = 'de';
        this.LtoF.el = 'gr';
        this.LtoF.en = 'gb';
        this.LtoF.es = 'es';
        this.LtoF.fr = 'fr';
        this.LtoF.it = 'it';
        this.LtoF.nl = 'nl';
        this.LtoF.pt = 'pt';
        this.LtoF.ro = 'ro';
        this.LtoF.sq = 'al';
        this.LtoF.sr = 'rs';
        this.LtoF.zh = 'cn';
    },
    //Chiamata axios per prendere tutte le lingue e poter ottenere il nome della lingua, per esteso, in inglese
    fetchLanguages(url) {
        axios.get(url)
            .then(response => {
                response.data.forEach(lang => {
                    //Abbino come proprietà e valore la sigla dell'iso639 al nome esteso della lingua nell'oggetto d'appoggio
                    const iso6391 = lang.iso_639_1;
                    const engName = lang.english_name;
                    this.objLangNoFlag[iso6391] = engName;
                });

            })
            .catch(error => {
                console.error(error);
            })

    }
})
