import operate from '../logic/operate';

describe('operate', () => {
  it('should perform addition', () => {
    const result = operate('5', '2', '+');
    expect(result).toBe('7');
  });

  it('should perform subtraction', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  it('should perform multiplication', () => {
    const result = operate('5', '2', 'x');
    expect(result).toBe('10');
  });

  it('should perform division', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });

  it('should handle division by 0', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should perform modulo', () => {
    const result = operate('7', '4', '%');
    expect(result).toBe('3');
  });

  it('should handle modulo with divisor 0', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => {
      operate('5', '2', '$');
    }).toThrowError("Unknown operation '$'");
  });
});
