import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

function LobbyCanvas() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* Aquí puedes agregar tus elementos usando react-konva */}
        <Rect x={20} y={20} width={50} height={50} fill="red" />
      </Layer>
    </Stage>
  );
}

export default LobbyCanvas;
