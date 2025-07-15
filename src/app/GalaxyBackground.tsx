"use client";

import React, { useRef, useEffect } from "react";
import { GalaxyRenderer } from "/workspaces/portfolio/GALAXY/Galaxy-Renderer-Typescript-main/Galaxy-Renderer-Typescript-main/src/GalaxyRenderer";

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<GalaxyRenderer | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to fill the viewport
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.zIndex = "0";
      canvas.style.pointerEvents = "none";
    };
    setCanvasSize();

    // Instantiate the galaxy renderer
    rendererRef.current = new GalaxyRenderer(canvas);

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      rendererRef.current!.fov = Math.min(window.innerWidth, window.innerHeight) / 2;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // No explicit cleanup needed for GalaxyRenderer, but you can add one if needed
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cvGalaxy"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default GalaxyBackground; 