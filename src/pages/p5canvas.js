// P5Sketch.js
import React, { useEffect } from 'react';
import p5 from 'p5';
import Canvas from '../hooks/canvas'; // Note the correct import

const P5Sketch = () => {
  let myP5; // Declare a variable to reference the p5 instance

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
      };

      p.draw = () => {
        Canvas(p);
      };

      p.windowResized = () => {
        // Resize the canvas when the window is resized
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    myP5 = new p5(sketch); // Assign the p5 instance to the variable

    return () => {
      // Dispose of any resources or perform cleanup here
      myP5.remove(); // This removes the canvas and stops the sketch
    };
  }, []);

  const handleResize = () => {
    // Trigger the windowResized event when the window is resized
    if (myP5) {
      myP5.windowResized();
    }
  };

  useEffect(() => {
    // Attach an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts(clean up function)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div id="p5-sketch-container"></div>;
};

export default P5Sketch;


