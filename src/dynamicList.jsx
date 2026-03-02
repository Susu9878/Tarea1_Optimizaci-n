import { useState } from 'react'

function Like() {
  const [likes, setLikes] = useState(0)
  return (
      <div>
        <p>Likes: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>Dar Like</button>
      </div>
  )
}

function DynamicList() {
  const [elementos, setElementos] = useState(['Elemento 1', 'Elemento 2', 'Elemento 3']);
  const [inputValue, setInputValue] = useState('');

  const agregarElemento = () => {
    if (inputValue.trim() === '') return;
    setElementos([...elementos, inputValue.trim()]);
    setInputValue('');
  };

  const eliminarElemento = (index) => {
    setElementos(elementos.filter((_, i) => i !== index));
  };

  console.log("Render List");

  return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && agregarElemento()}
              placeholder="Nuevo elemento..."
          />
          <button onClick={agregarElemento}>Agregar</button>
        </div>

        <ul>
          {elementos.map((item, index) => (
              <div key={index}>
                <li>{item}</li>
                <Like />
                <button onClick={() => eliminarElemento(index)}>Eliminar</button>
              </div>
          ))}
        </ul>
      </div>
  );
}

export default DynamicList;