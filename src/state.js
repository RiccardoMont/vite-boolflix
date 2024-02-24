import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    api_url: 'https://api.themoviedb.org/3/search/movie?api_key=c57edb92da6d3be4a161139756c3ceae&query=troy',
    base_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=c57edb92da6d3be4a161139756c3ceae&query=',
    lang_api_url: 'https://api.themoviedb.org/3/configuration/languages?api_key=c57edb92da6d3be4a161139756c3ceae',
    country_api_url: 'https://api.themoviedb.org/3/configuration/countries?api_key=c57edb92da6d3be4a161139756c3ceae',
    translations_api_url: 'https://api.themoviedb.org/3/configuration/primary_translations?api_key=c57edb92da6d3be4a161139756c3ceae',
    //Array d'appoggio per la lista di film richiesta
    movies: [],
    //Oggetto d'appoggio utilizzato per la corrispondenza tra lingua e bandiera
    LtoF: {},
    //Arrays di appoggio per le sigle, rispettivamente, di lingua e bandiera
    arrayLang: [],
    arrayFlag: [],
    //Array di appoggio utilizzato per le lingue senza bandiera
    arrayLangNoFlag: [],
    //Chiamata axios principare dove si richiede la lista dei film
    fetchData(url) {
        axios.get(url)
            .then(response => {
                console.log(response);
                console.log(response.data.results);
                console.log(this.movies);
                response.data.results.forEach(movie => {
                    this.movies.push(movie);
                });
                console.log(this.movies);
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
                    //Scompongo la stringa di "lingua=BANDIERA" in due parti, ognuna nel rispettivo array d'appoggio. Ognuna di queste avrà automaticamente lo stesso index della sua corrispettiva quando ciclata
                    this.arrayLang.push(translation.slice(0, 2));
                    this.arrayFlag.push(translation.slice(3, 5).toLowerCase());

                });

                //Inserisco la sigla della lingua come nome della proprietà all'oggetto d'appoggio LtoF e gli abbino il valore della sigla della bandiera
                for (let i = 0; i < this.arrayLang.length; i++) {

                    this.LtoF[this.arrayLang[i]] = this.arrayFlag[i];

                };

                //Richiamo la funzione per correggere alcune bandiere
                this.adjustmentFlag();
                console.log(this.LtoF);
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
                console.log(response.data);
                response.data.forEach(lang => {
                    this.arrayLangNoFlag.push(lang);
                });

            })
            .catch(error => {
                console.error(error);
            })

    }
    
})
