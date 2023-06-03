import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: 0, next: null, operation: null });
  });
});
