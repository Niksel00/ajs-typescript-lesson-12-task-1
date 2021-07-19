import Buyable from './Buyable';
import Countable from './Countable';

export default class Gadget implements Buyable, Countable {
    constructor(
        readonly id: number,
        readonly brand: string,
        readonly name: string,
        readonly price: number,
        readonly countable: boolean,
    ) { }
}