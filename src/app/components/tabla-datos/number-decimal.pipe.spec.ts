import { NumberDecimalPipe } from './number-decimal.pipe';

describe('NumberDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberDecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
