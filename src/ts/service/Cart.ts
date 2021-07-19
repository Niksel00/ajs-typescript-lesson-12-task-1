import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if(!this._items.find((itemIndex) => itemIndex.id === item.id) || 'countable' in item) {
            this._items.push(item);
        }
    }

    sum(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    sumDiscount(discount: number): number {
        return ( this.sum() * (1 - (discount / 100)));  
    }

    remove(id: number): void {
        const itemIndex = this._items.findIndex((item) => item.id === id);
        if (itemIndex != -1) {
            this._items.splice(itemIndex, 1);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}