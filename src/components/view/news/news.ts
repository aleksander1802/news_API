import './news.css';
import { interfaceNews } from '../../controller/loader';

export const typeSafe = (parent: ParentNode, selector: string): HTMLElement => {
    const node = parent.querySelector(selector);
    if (node) {
        node;
    }
    if (node instanceof HTMLElement) {
        node;
    } else {
        throw new Error('Must be an HTMLElement!');
    }
    return node;
};

class News {
    draw(data: interfaceNews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item, idx): void => {
                const newsClone = newsItemTemp.content.cloneNode(true);
                if (newsClone instanceof DocumentFragment) {
                    newsClone;
                } else {
                    throw new Error('Элемент не найден');
                }

                if (idx % 2) {
                    typeSafe(newsClone, '.news__item').classList.add('alt');
                    typeSafe(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                        item.urlToImage || 'img/news_placeholder.jpg'
                    })`;
                }

                typeSafe(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
                typeSafe(newsClone, '.news__meta-date').textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                typeSafe(newsClone, '.news__description-title').textContent = item.title;
                typeSafe(newsClone, '.news__description-source').textContent = item.source.name;
                typeSafe(newsClone, '.news__description-content').textContent = item.description;
                typeSafe(newsClone, '.news__read-more a').setAttribute('href', item.url);

                fragment.append(newsClone);
            });
        }
        typeSafe(document, '.news').innerHTML = '';
        typeSafe(document, '.news').appendChild(fragment);
    }
}

export default News;
