import clean from '../src/';

test('test cleaning of error', () => {
  return expect(clean(new Error('test'))).toEqual(
    expect.stringContaining('test')
  );
});
