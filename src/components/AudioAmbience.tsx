"use client";

import { useEffect, useRef } from "react";

interface AudioAmbienceProps {
  isPlaying: boolean;
}

export default function AudioAmbience({ isPlaying }: AudioAmbienceProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Ethereal chord frequencies (F# minor 9th / atmospheric ambient pad)
        // F#2, C#3, A3, C#4, E4, G#4
        const freqs = [92.5, 138.59, 220.0, 277.18, 329.63, 415.3];

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);
        filter.connect(masterGain);

        oscillatorsRef.current = freqs.map((f, i) => {
          const osc = ctx.createOscillator();
          osc.type = i % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          // Subtle LFO detune for lush cinematic texture
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.15 + i * 0.05, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(1.8, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.detune);
          lfo.start();

          const oscGain = ctx.createGain();
          oscGain.gain.setValueAtTime(0.2 / freqs.length, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(filter);

          osc.start();
          return osc;
        });
      } catch (err) {
        console.warn("Audio ambience initialization skipped", err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        try {
          const ctx = audioCtxRef.current;
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
          setTimeout(() => {
            oscillatorsRef.current.forEach((o) => {
              try {
                o.stop();
              } catch (_) {}
            });
            oscillatorsRef.current = [];
            audioCtxRef.current?.close();
            audioCtxRef.current = null;
          }, 1300);
        } catch (_) {}
      }
    }

    return () => {
      oscillatorsRef.current.forEach((o) => {
        try {
          o.stop();
        } catch (_) {}
      });
      oscillatorsRef.current = [];
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [isPlaying]);

  return null;
}

