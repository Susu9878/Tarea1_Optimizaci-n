function DynamicList() {
  const elementos = ['Elemento 1','Elemento 2','Elemento 3'];

  console.log("Render List");
  return (
    <ul>
      {elementos.map((item, index) => (
    
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default DynamicList;