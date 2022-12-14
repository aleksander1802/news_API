import AppLoader from './appLoader';
import { Source, NewsEverythingContent, TypeCallback } from './loader';

class AppController extends AppLoader {
    getSources(callback: TypeCallback<Source>) {
        super.getResp<Source>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: TypeCallback<NewsEverythingContent>) {
        let target = e.target;

        const newsContainer = e.currentTarget;

        if (!(newsContainer instanceof HTMLElement)) {
            throw new Error('Элемент не найден');
        }

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target !== null) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (sourceId == null) {
                        throw new Error('Элемент не найден');
                    }
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp<NewsEverythingContent>(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
