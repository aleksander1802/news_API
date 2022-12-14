import News from './news/news';
import Sources from './sources/sources';
import { NewsEverythingContent, Source } from '../controller/loader';
import { interfaceSources } from '../controller/loader';

export class AppView {
    constructor(
        protected news: News = new News(),
        protected sources: Sources = new Sources(),
        public paginationArray: interfaceSources[] = []
    ) {}

    drawNews(data: NewsEverythingContent) {
        const values = data?.articles ? data?.articles : [];

        this.news.draw(values);
    }

    drawSources(data: Source) {
        const addSourceButton = document.querySelector('.button__add');

        if (!(addSourceButton instanceof HTMLElement)) {
            throw new Error('Шаблон-элемент не найден!');
        }

        const values = data?.sources ? data?.sources : [];

        this.paginationArray.push(...values);

        addSourceButton.addEventListener('click', () => {
            if (this.paginationArray.length < 10) {
                addSourceButton.style.display = 'none';
            }
            this.pagination(this.paginationArray);
        });

        this.pagination(this.paginationArray);
    }

    pagination(array: interfaceSources[]) {
        this.sources.draw(array.splice(0, 10).flat());
    }
}

export default AppView;
