import { stringify } from './stringify.js';

describe('stringify()', () => {
  it('should stringify a javascript object into a json object as usual.', () => {
    expect(stringify({ foo: 'bar', baz: 123 })).toStrictEqual('{"foo":"bar","baz":123}');
  });
});
