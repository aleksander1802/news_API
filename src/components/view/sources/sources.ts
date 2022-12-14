import './sources.css';
import { interfaceSources } from '../../controller/loader';
import { typeSafe } from '../news/news';

class Sources {
    count = 0;
    paginationArray: interfaceSources[] = [];

    draw(data: interfaceSources[]) {
        const main = document.querySelector('.sources');

        if (!(main instanceof HTMLElement)) {
            throw new Error('Шаблон-элемент не найден!');
        }

        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            throw new Error('Шаблон-элемент не найден!');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            if (sourceClone instanceof DocumentFragment) {
                sourceClone;
            } else {
                throw new Error('Фрагмент не найден');
            }

            typeSafe(sourceClone, '.source__item-name').textContent = item.name;
            typeSafe(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        typeSafe(document, '.sources').append(fragment);
    }
}

export default Sources;
