describe('Pruebas en <DemoComponent />', () => {
  test('Ésta prueba no debe fallar', () => {
    // 1. inicializacion
    const message = 'Hola mundo';

    // 2. estimulo
    const message2 = message.trim();

    // 3. Observar el comportamiento ...esperado
    expect(message).toBe(message2);
  });
});
