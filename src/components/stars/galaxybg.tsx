// GalaxyBackground.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import { Galaxy } from '/workspaces/portfolio/src/components/stars/galaxy';

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dimRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const galaxy = new Galaxy(canvasRef.current);
    return () => galaxy.stop(true);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="app__canvas fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
      <div ref={dimRef} className="app__canvasDimensions fixed top-0 left-0 w-full h-full z-0" />
    </>
  );
}
