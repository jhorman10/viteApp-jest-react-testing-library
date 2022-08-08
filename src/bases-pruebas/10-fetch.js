const apiKey = 'z6mjQ6R5XCTz8q817QGm2r7immcVmfIE';

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

//Promesas en cadena
peticion
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  })
  .catch((error) => console.error(error));
