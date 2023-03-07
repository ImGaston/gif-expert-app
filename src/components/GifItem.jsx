const GifItem = ({ id, title, image }) => {
  return (
    <div className='card'>
      <p>{title}</p>
      <img
        src={image}
        alt='gif'
      />
    </div>
  );
};

export default GifItem;
