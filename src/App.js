import React from 'react';
import './App.css'; // Import your CSS file.
import './components/colorpicker.css';
import ColorPicker from './components/colorpicker';

function App() {
  const colors = ['red', '#32cd32', 'blue', 'yellow', 'violet','lightblue','orange','purple','lightpink','darkgreen','tomato','skyblue','brown','orange','blue','#ffdb58'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
