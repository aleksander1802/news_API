import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '99ad52376bb54747aa23434e51513238', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
