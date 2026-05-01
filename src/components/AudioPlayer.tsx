"use client";

import { useState, useRef, useEffect } from "react";

// "Te Regalo" — Carla Morrison
// Archivo en /public/musica_fondo.mp3
const AUDIO_SRC = "/musica_fondo.mp3";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "none";

    audio.addEventListener("canplaythrough", () => setIsReady(true));
    audio.addEventListener("error", () => setIsReady(false));

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        setIsReady(true);
      }).catch(() => {
        // El navegador bloqueó el autoplay, igual actualizamos UI
        setIsPlaying(false);
      });
    }
  }

  return (
    <button
      type="button"
      className={`audio-player-btn ${isPlaying ? "audio-player-btn--playing" : ""}`}
      onClick={toggleAudio}
      aria-label={isPlaying ? "Pausar música de fondo" : "Reproducir música de fondo"}
      title={isPlaying ? "⏸ Pausar · Te Regalo — Carla Morrison" : "▶ Reproducir música · Te Regalo — Carla Morrison"}
      id="audio-player-toggle"
    >
      {isPlaying ? (
        /* Ícono de nota musical (activo) */
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      ) : (
        /* Ícono de nota musical silenciada */
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" opacity="0.4" />
          <line
            x1="3"
            y1="3"
            x2="21"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
