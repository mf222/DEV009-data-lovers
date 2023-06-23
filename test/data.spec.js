import { majorArcana } from '../src/data.js';

const cartas = [{type: "major"}, {type: "minor"}]

describe('majorArcana', () => {
  it('is a function', () => {
    expect(typeof majorArcana).toBe('function');
  });

  it('quiero que filtre y quede solo con las cartas arcanas', () => {

    expect(majorArcana(cartas).length).toBe(1); //toEqual
    expect(majorArcana(cartas)).toEqual([{type: "major"}]);
  });

});
