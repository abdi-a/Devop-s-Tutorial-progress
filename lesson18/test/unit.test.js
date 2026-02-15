const { calculateDiscount } = require('../logic');

describe('Unit Tests: Logic', () => {
    test('should calculate 10% discount correctly', () => {
        expect(calculateDiscount(100, 10)).toBe(90);
    });

    test('should throw error for negative price', () => {
        expect(() => calculateDiscount(-50, 10)).toThrow("Price cannot be negative");
    });
});
