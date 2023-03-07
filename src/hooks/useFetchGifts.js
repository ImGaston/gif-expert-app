//El hook puede ser JSX pero en los caso dnd tenga q reetornar un JSX(<div> con algo adentro)
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifts = (categorias) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(categorias);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(categorias);
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifts;
