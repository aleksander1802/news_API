import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { typeSafe } from '../view/news/news';

class App {
    constructor(public controller: AppController = new AppController(), public view: AppView = new AppView()) {}

    start() {
        typeSafe(document, '.sources').addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );

        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
