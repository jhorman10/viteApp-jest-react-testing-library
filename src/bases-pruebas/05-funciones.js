
export const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'juan',
  };
};

export const getUsuarioActivo = (nombre) => ({
  uid: 'ABC123',
  username: nombre,
});