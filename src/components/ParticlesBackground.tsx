"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse", // Repele as partículas ao clicar
            },
            onHover: {
              enable: true,
              mode: "bubble", // Efeito "bolha" ao passar o mouse sobre as partículas
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            bubble: {
              distance: 250, // Distância para o efeito "bolha"
              size: 10, // Tamanho das partículas na bolha
              duration: 2, // Duração do efeito
              opacity: 0.8, // Transparência na bolha
              speed: 3, // Velocidade do efeito
            },
          },
        },
        particles: {
          color: {
            value: ["#ffdd57", "#ff6b6b", "#ffd700", "#f08a5d"], // Cores vibrantes e contrastantes
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // Partículas "quicam" nas bordas
            },
            random: true, // Movimentação aleatória
            speed: 3, // Velocidade mais suave
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120, // Mais partículas
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: ["circle", "triangle", "polygon"], // Diversas formas para variar o visual
          },
          size: {
            value: { min: 1, max: 8 }, // Partículas de tamanhos variados
            animation: {
              enable: true,
              speed: 4, // Animação de mudança de tamanho
              minimumValue: 0.3,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
