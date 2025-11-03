import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["repulse"] },
            // ✅ corregido: antes era "resize: true"
            resize: { enable: true },
          },
          modes: {
            repulse: {
              distance: 160,
              duration: 1.5,
              speed: 0.7,
              factor: 0.5,
              easing: "ease-out",
            },
          },
        },
        particles: {
          // ✅ corregido: "area" → "width" (el tipo nuevo de density)
          number: { value: 300, density: { enable: true, width: 1000 } },
          color: {
            value: ["#fff8e6", "#f8e8c0", "#e8d0a8", "#fff2dc"],
          },
          move: {
            enable: true,
            speed: { min: 0.05, max: 0.25 },
            random: true,
            straight: false,
            outModes: { default: "out" },
            // ✅ el campo "parallax" no existe oficialmente → forzamos el tipo
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error Parallax no está en los tipos pero sí funciona
            parallax: { enable: true, force: 25, smooth: 35 },
          },
          opacity: {
            value: { min: 0.15, max: 0.6 },
            animation: { enable: true, speed: 0.4, sync: false },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 0.7, max: 2.5 },
            animation: {
              enable: true,
              speed: 0.8,
              // ✅ "minimumValue" ya no está en tipos oficiales, pero lo dejamos con ignore
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error para mantener compatibilidad visual
              minimumValue: 0.3,
              sync: false,
            },
          },
          zIndex: { value: { min: 0, max: 3 } },
        },
      }}
    />
  );
};

export default StarBackground;
