import React, { useEffect, useRef } from "react";
import "./AAA.scss";

const Heartbeat = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    const draw = (time) => {
      const width = canvas.width;
      const height = canvas.height;

      // Effacer le canvas
      context.clearRect(0, 0, width, height);

      // Définir les paramètres du graphique
      const amplitude = height / 3; // Amplitude du signal
      const frequency = 0.15; // Fréquence du signal

      context.beginPath();
      context.moveTo(0, height / 2);

      // Dessiner la courbe sinusoïdale
      for (let x = 0; x < width; x++) {
        const y = height / 2 + amplitude * Math.sin(frequency * (x + time / 100)); // Modifie cette ligne
        context.lineTo(x, y);
      }

      context.strokeStyle = "red";
      context.lineWidth = 3;
      context.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0); // Commencer l'animation

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="heartbeat-container">
      <canvas ref={canvasRef} width={800} height={400} />
    </div>
  );
};

export default Heartbeat;
