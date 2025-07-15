// Star.ts
export class Star {
  orbitX: number;
  orbitY: number;
  orbitRadiusRange: number[];
  secondsToFullRotation: number;
  glowCanvas: HTMLCanvasElement;
  angle: number;
  _radius?: number;

  constructor({ orbitX, orbitY, orbitRadiusRange, secondsToFullRotation, glowCanvas }: any) {
    this.orbitX = orbitX;
    this.orbitY = orbitY;
    this.orbitRadiusRange = orbitRadiusRange;
    this.secondsToFullRotation = secondsToFullRotation;
    this.glowCanvas = glowCanvas;
    this.angle = Math.random() * Math.PI * 2;
  }

  static createGlowCanvas() {
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 6;
    glowCanvas.height = 6;
    const ctx = glowCanvas.getContext('2d');
    if (!ctx) return null;
    const gradient = ctx.createRadialGradient(3, 3, 0, 3, 3, 3);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 6, 6);
    return glowCanvas;
  }

  draw(ctx: CanvasRenderingContext2D, speedY: number) {
    this.angle += (Math.PI * 2) / (this.secondsToFullRotation * 60);
    const radius = this._radius ??= Math.random() * (this.orbitRadiusRange[1] - this.orbitRadiusRange[0]) + this.orbitRadiusRange[0];
    const x = this.orbitX + Math.cos(this.angle) * radius;
    const y = this.orbitY + Math.sin(this.angle) * radius + speedY * 2;
    ctx.drawImage(this.glowCanvas, x, y);
  }
}
