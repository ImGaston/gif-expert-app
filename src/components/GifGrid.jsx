import useFetchGifts from '../hooks/useFetchGifts';
import GifItem from './GifItem';

const GifGrid = ({ categorias }) => {
  const { images, isLoading } = useFetchGifts(categorias);

  return (
    <>
      <h3>{categorias}</h3>
      {isLoading && (
        <div>
          <h2 className='text-center text-2xl font-bold '>Cargando...</h2>
        </div>
      )}
      <div className='card-grid'>
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
