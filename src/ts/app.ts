import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Gadget from './domain/Gadget';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000));
console.log(cart.items);

console.log(cart.sum());
console.log(cart.sumDiscount(30));
cart.remove(1001);
console.log(cart.items);


const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
cart.add(item1);
console.log(cart.items);
cart.add(item1);
console.log(cart.items);
cart.add(item1);
console.log(cart.items);