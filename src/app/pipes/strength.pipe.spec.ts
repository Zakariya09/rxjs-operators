import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it("10 should be weak", () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(10)).toBe(`10 (Weak)`)
  })

  it("20 should be strong", () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(20)).toBe('20 (Strong)')
  })
});

