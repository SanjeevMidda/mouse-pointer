import './index.css';
import { useState } from 'react';

function App() {

  const [mouseLocation, setMouseLocation] = useState({left:0, top:0});

  let styles = {
    left: mouseLocation.left,
    top: mouseLocation.top,
  }
  return (

    <div className="App" onMouseMove={(e) => {setMouseLocation({left: e.clientX, top: e.clientY})}}>
      <div className="circle" style={styles}></div>

      <div className="buttonContainer">
        <button>
          <h3>p</h3>
        </button>
      </div>
    </div>
  );
}

export default App;
