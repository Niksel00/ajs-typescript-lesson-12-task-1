import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly nameEnglish: string,
        readonly year: number,
        readonly slogan: string,
        readonly country: string,
        readonly duration: number,
        readonly genre: string[],
        readonly price: number,
    ) { }
}