import { useRef, useEffect } from "react";

const Background = () => {
  const canvasRef = useRef(null);
  let stars = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const createStars = () => {
      const isMobile = window.innerWidth < 768;
      const starCount = isMobile ? 120 : 300; // fewer stars for mobile
      const newStars = Array.from({ length: starCount }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        delta: Math.random() * 0.015,
      }));
      stars = newStars;
    };

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0); // scale for crisp rendering
      createStars();
    };

    resize();
    window.addEventListener("resize", resize);

    const drawGalaxy = () => {
      const grad = ctx.createRadialGradient(
        canvas.width / 2 / (window.devicePixelRatio || 1),
        canvas.height / 2 / (window.devicePixelRatio || 1),
        0,
        canvas.width / 2 / (window.devicePixelRatio || 1),
        canvas.height / 2 / (window.devicePixelRatio || 1),
        Math.max(canvas.width, canvas.height) / 2.2 / (window.devicePixelRatio || 1)
      );
      grad.addColorStop(0, "rgba(255, 255, 255, 0.15)");
      grad.addColorStop(0.3, "rgba(180, 180, 255, 0.1)");
      grad.addColorStop(0.7, "rgba(60, 60, 150, 0.12)");
      grad.addColorStop(1, "transparent");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStars = () => {
      for (let star of stars) {
        star.opacity += star.delta;
        if (star.opacity <= 0 || star.opacity >= 1) star.delta = -star.delta;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000010";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawGalaxy();
      drawStars();
      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default Background;
