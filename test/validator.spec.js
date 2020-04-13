// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    test('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    test('debería retornar true para "4137894711755904"', () => {
      validator.isValid(validator.isValid('true'), '4137894711755904');
    });
  });

  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    test('Debería retornar "############5616" para "4556364607935616"', () => {
      validator.maskify(validator.maskify('############5616'), '4556364607935616');
    });
  });
});
