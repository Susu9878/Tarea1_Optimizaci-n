import { useState } from 'react'


function Like(index){
  const [likes, setLikes] = useState(0)
  return(
    <div>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}> Dar Like </button>
    </div>
  )
}

function DynamicList() {
  const elementos = ['Elemento 1','Elemento 2','Elemento 3'];
  
  console.log("Render List");
  return (
    <ul>
      {elementos.map((item, index) => (
        <div>
          <li key={index}>{item}</li>
              <Like></Like>
        </div>
      ))}
    </ul>
  );
}

export default DynamicList;