describe('Provando Jest', () => {
  test('Dos objetos iguales', () => {
    
    const datos0 = {
      nombre: 'Luis Angel',
      apeido: 'D'
    };

    const datos1 = {
      nombre: 'Luis Angel',
      apeido: 'D'
    };

    expect(datos0).toEqual(datos1);

  });
});