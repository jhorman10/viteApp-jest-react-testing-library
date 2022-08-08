export const useContext = ({ nombre, edad, clave, rango = 'Capitàn' }) => {
  return {
    nombreClave: nombre,
    anios: edad,
    latLng: {
        lat: -34.6,
        lng: -58.4
    },
  };
};