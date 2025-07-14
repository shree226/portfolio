// src/app/CosmicParticlesBackground.tsx
'use client';

import React, { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';



// Choose one: 'galaxy', 'blackhole', 'solarSystem'
const COSMIC_PRESET: 'galaxy' | 'blackhole' | 'solarSystem' = 'blackhole'; // Corrected type definition

export default function CosmicParticlesBackground() { // Define the component
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log('⏳ initializing tsParticles…');
        await loadAll(engine); // Loads all the shapes, plugins, etc.
        console.log('✅ tsParticles ready');
    }, []);

    // Build options based on preset
    const options = useMemo(() => {
        const base = {
            background: {
                color: {
                    value: 'transparent' // Background color of the canvas itself
                }
            },
            fpsLimit: 60,
            detectRetina: true,
            particles: {
                number: { value: 200, density: { enable: true, area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.8 },
                size: { value: { min: 1, max: 3 } },
                links: { // Add links for a more connected look (optional)
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1,
                    triangles: {
                        enable: false,
                        color: '#ffffff',
                        opacity: 0.1
                    },
                    consent: false,
                    blink: false,
                    warp: false
                },
                move: {
                    enable: true,
                    speed: 0.2,
                    direction: 'none' as const,
                    outModes: { default: 'out' as const }
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'repulse' as const // Particles repel on hover
                    },
                    onClick: {
                        enable: true,
                        mode: 'push' as const // Click to add particles
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        quantity: 4
                    }
                }
            }
        };

        // galaxy → gentle swirl
        if (COSMIC_PRESET === 'galaxy') {
            return {
                ...base,
                particles: {
                    ...base.particles,
                    move: {
                        ...base.particles.move,
                        speed: 0.1, // Slower for a gentler swirl
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                }
            };
        }

        // blackhole → strong pull
        if (COSMIC_PRESET === 'blackhole') {
            return {
                ...base,
                particles: {
                    ...base.particles,
                    move: {
                        ...base.particles.move,
                        speed: 0.5,
                        attract: {
                            enable: true,
                            rotateX: 3000,
                            rotateY: 3000
                        }
                    }
                }
            };
        }

        // solarSystem (example, you'll need to define specific options for it)
        if (COSMIC_PRESET === 'solarSystem') {
            return {
                ...base,
                particles: {
                    ...base.particles,
                    color: { value: '#ADD8E6' }, // Lighter color for 'solarSystem'
                    move: {
                        ...base.particles.move,
                        speed: 0.1, // Slower
                        direction: 'top-right' as const, // Example direction
                        attract: {
                            enable: false // No attraction for solar system (unless simulating gravity)
                        }
                    },
                    shape: { type: ['circle', 'star'] }, // More varied shapes
                    size: { value: { min: 0.5, max: 2.5 } }
                }
            };
        }

        // Default return in case none match or for 'solarSystem' if you don't define it
        return base;
    }, [COSMIC_PRESET]); // Re-memoize options if preset changes

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            // Position it absolutely to cover the background, behind content
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ backgroundColor: 'transparent' }} // Ensure the Particles canvas itself is transparent
        />
    );
}