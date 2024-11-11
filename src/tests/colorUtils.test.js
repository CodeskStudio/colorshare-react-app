import { CColor } from '../utils/colorUtils';

describe('CColor Class', () => {
  test('should convert RGBA to HEX', () => {
    const color = new CColor(255, 0, 0); // Red
    expect(color.toHex()).toBe('#ff0000');
    
    const colorWithAlpha = new CColor(255, 0, 0, 0.5);
    expect(colorWithAlpha.toHex()).toBe('#ff000080');
  });

  test('should convert RGBA to HSL(A)', () => {
    const color = new CColor(255, 0, 0); // Red
    expect(color.toHsl()).toBe('hsl(0.0, 100%, 50%)');

    const colorWithAlpha = new CColor(255, 0, 0, 0.5);
    expect(colorWithAlpha.toHsl()).toBe('hsla(0.0, 100%, 50%, 0.5)');
  });

  test('should return correct string format based on input', () => {
    const color = new CColor(0, 128, 0); // Green
    expect(color.toString('rgb')).toBe('rgb(0, 128, 0)');
    
    const colorWithAlpha = new CColor(0, 128, 0, 0.75);
    expect(colorWithAlpha.toString('rgb')).toBe('rgba(0, 128, 0, 0.75)');
    
    expect(color.toString('hsl')).toBe('hsl(120.0, 100%, 25.1%)');
    expect(color.toString('hex')).toBe('#008000');
  });

  test('should convert HEX to RGBA using fromHex', () => {
    const color = CColor.fromHex('#ff0000');
    expect(color.r).toBe(255);
    expect(color.g).toBe(0);
    expect(color.b).toBe(0);
    expect(color.a).toBe(1);

    const colorWithAlpha = CColor.fromHex('#ff000080');
    expect(colorWithAlpha.r).toBe(255);
    expect(colorWithAlpha.g).toBe(0);
    expect(colorWithAlpha.b).toBe(0);
    expect(colorWithAlpha.a).toBeCloseTo(0.5);
  });

  test('should generate a random color', () => {
    const color = CColor.random();
    expect(color.r).toBeGreaterThanOrEqual(0);
    expect(color.r).toBeLessThanOrEqual(255);
    expect(color.g).toBeGreaterThanOrEqual(0);
    expect(color.g).toBeLessThanOrEqual(255);
    expect(color.b).toBeGreaterThanOrEqual(0);
    expect(color.b).toBeLessThanOrEqual(255);
    expect(color.a).toBe(1);
  });
});
