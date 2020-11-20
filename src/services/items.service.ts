import { IItem } from './IItem';

export function useItems() {
    let items: IItem[] = localStorage['items'] ? JSON.parse(localStorage['items']) : [];

    const add = (item: IItem) => {
        items.unshift(item);
        localStorage['items'] = JSON.stringify(items);
    };

    const getAll = (): IItem[] => {
        return items;
    };

    const getActual = (): IItem | null => {
        return items.length > 0 ? items[0] : null;
    };

    const updateActual = (newItem: IItem) => {
        items[0] = newItem;
        localStorage['items'] = JSON.stringify(items);
    };

    const size = () => {
        return items.length;
    };

    return {
        add,
        getAll,
        getActual,
        updateActual,
        size
    };
}