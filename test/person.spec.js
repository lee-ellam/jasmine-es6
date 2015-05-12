import Person from '../src/person';

describe('Person', () => {
  let lee = new Person('Lee', 'Ellam');

  it('should correctly set firstName and lastName properties', () => {
    expect(lee.firstName).toEqual('Lee');
    expect(lee.lastName).toEqual('Ellam');
  });

  it('should have a fullName getter property', () => {
    expect(lee.fullName).toEqual('Lee Ellam');
  });

  it('should have a greet method', () => {
    expect(lee.greet()).toEqual('Hello, my name is Lee Ellam.');
  });
});
