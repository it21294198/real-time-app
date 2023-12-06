// Canvas.js
function Canvas(context) {
    context.background(0);

    // Add color to the ellipse
    context.fill('#fac'); // Red fill color
    context.noStroke(); // No stroke (outline)
  
    // Add blur effect to the ellipse
    context.filter('blur', 30);
  
    // Draw the ellipse at the mouse position
    context.ellipse(context.mouseX, context.mouseY, 70, 70);
    context.fill('#fff'); // Red fill color
    context.ellipse(context.mouseX, context.mouseY, 60, 60);
    context.fill('#000'); // Red fill color
    context.ellipse(context.mouseX, context.mouseY, 50, 50);
  
    return context;
  }
  
  export default Canvas;
  