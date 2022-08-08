// Async & await

export const getImagen = async () => {
  // const apiKey = 'z6mjQ6R5XCTz8q817QGm2r7immcVmfIE';
  const apiKey = 'z6mjQ6R5XCTz8q817QGm2r7immcVmfI';
  const baseUrl = 'https://api.giphy.com/v1/gifs/random';

  try {
    const res = await fetch(`${baseUrl}?api_key=${apiKey}`);
    const { data } = await res.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    // console.error(error);
    return 'No se encontro la imagen';
  }
};
