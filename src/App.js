import "./styles.css";
import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

export default function App() {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(false);


  const trackPos = (data) => {
    if(data.x < 0){
      stopDrag()
    }else if(data.y < 0){
      stopDrag()
    }
    else{
      setPosition({ x: data.x, y: data.y });
    }
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const stopDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
}

  return (
    <div className="App">
      <Draggable
        nodeRef={nodeRef}
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
        onDragLeave={(event) => stopDrag(event, 'leave')}

      >
        <div
          ref={nodeRef}
          className="box"
          style={{ opacity: Opacity ? "0.6" : "1" }}
        >
          <div>BOX</div>
          <div>
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </div>
      </Draggable>
    </div>
  );
}
