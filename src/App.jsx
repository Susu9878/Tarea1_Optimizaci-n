import React, { useState, useMemo } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const styles = useMemo(() => {
    return {
      color: dark ? "white" : "black",
      backgroundColor: dark ? "black" : "white"
    };
  }, [dark]); 
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setDark(d => !d)}>
        Toggle Theme
      </button>

      <Child styles={styles} />
    </div>
  );
}

const Child = React.memo(function Child({ styles }) {
  console.log("Child re-rendered");
  return <div style={styles}>I am a child component</div>;
});

export default Parent;