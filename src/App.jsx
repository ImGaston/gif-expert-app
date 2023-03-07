import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

function App() {
  const [categories, setCategories] = useState(['World Cup Argentina']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((categorias) => (
        <GifGrid
          key={categorias}
          categorias={categorias}
        />
      ))}
    </div>
  );
}

export default App;
