/* eslint-disable no-undef */

import calculator from './calculator';

test('sum calculator', () => {
	const result = calculator.sum(2, 2);
	expect(result).toBe(4);
});

test('substract calculator', () => {
	const result = calculator.substract(2, 2);
	expect(result).toBe(0);
});

test('mutiply calculator', () => {
	const result = calculator.multiplay(2, 5);
	expect(result).toBe(10);
});

test('divide calculator', () => {
	const result = calculator.divide(4, 2);
	expect(result).toBe(2);
});
