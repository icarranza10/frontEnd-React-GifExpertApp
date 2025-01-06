export const getMyGift = async (category) => {
  const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=slFDv7GjuV3x2t1tD3SSfYMfog42VsOx&q=${category}&limit=5`;
  const responseApi = await fetch(urlApi);

  const { data } = await responseApi.json();

  const myGifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(myGifs);
  return myGifs;
};
