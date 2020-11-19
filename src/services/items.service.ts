import { IItem } from './IItem';

export function useItems() {

    const add = (item: IItem) => {
        let items = getAll();

        items.unshift(item);
        localStorage['items'] = JSON.stringify(items);
    };

    const getAll = (): IItem[] => {
        let items = localStorage['items'];

        return items !== undefined ? JSON.parse(items) : [];
    };

    const getActual = (): IItem | null => {
        let items = getAll();

        return items.length > 0 ? items[0] : null;
    }

    return {
        add,
        getAll,
        getActual
    };
}