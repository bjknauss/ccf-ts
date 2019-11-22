import { Example } from './example';

describe('Example', () => {
  let example: Example;

  beforeEach(() => {
    example = new Example();
  });

  it('adds two numbers together', () => {
    expect(example.add(2, 4)).toEqual(6);
  });
});
