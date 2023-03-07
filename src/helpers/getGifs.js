export const getGifs = async (categorias) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YNBQhk19YWjc8Yhc45H7fFiTiadpInDo&q=${categorias}&limit=6`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    image: img.images.downsized.url,
  }));

  return gifs;
};
