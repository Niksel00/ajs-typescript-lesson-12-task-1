import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Gadget from '../domain/Gadget';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart add', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  expect(cart.items).toEqual([item1, item2, item3]);
});

test('cart add countable', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Gadget(555, 'Apple', 'Galaxy S10', 2500, true);
  cart.add(item1);
  cart.add(item2);
  cart.add(item2);
  cart.add(item2);
  expect(cart.items).toEqual([item1, item2]);
  cart.add(item3);
  cart.add(item3);
  expect(cart.items).toEqual([item1, item2, item3, item3]);
});

test('cart sum', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  expect(cart.sum()).toBe(3900);
});

test('cart sum with discount', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  expect(cart.sumDiscount(30)).toBe(2730);
});

test('cart remove', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  cart.remove(1008)
  expect(cart.items).toEqual([item1, item3]);
});

test('cart remove countable', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Gadget(555, 'Apple', 'Galaxy S10', 2500, true);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  cart.add(item3);
  cart.add(item3);
  cart.remove(555)
  expect(cart.items).toEqual([item1, item2, item3, item3]);
});

test('cart remove once', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  cart.remove(1010);
  cart.remove(1010);
  cart.remove(1010);
  expect(cart.items).toEqual([item1, item2]);
});