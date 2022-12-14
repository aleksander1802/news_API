import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            // https://newsapi.org/v2/
            // https://nodenews.up.railway.app/
            // https://newsapi-redirect-production.up.railway.app/
            apiKey: '99ad52376bb54747aa23434e51513238', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
