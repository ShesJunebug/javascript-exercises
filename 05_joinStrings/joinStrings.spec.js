const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is June', () => {
    expect(values.firstName).toEqual('June');
  });
  test('lastName is Buggsley', () => {
    expect(values.lastName).toEqual('Buggsley');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2000', () => {
    expect(values.birthYear).toEqual(2000);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('hello, my name is June Buggsley and I am 25 years old!');
  });
});

describe('step 3', () => {
  test('fullName is June Buggsley', () => {
    expect(values.fullName).toEqual('June Buggsley');
  });
  test('age is 25', () => {
    expect(values.age).toEqual(25);
  });
});
