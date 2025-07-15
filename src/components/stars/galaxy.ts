// Galaxy.ts
import Stats from 'stats.js';
import { Star } from '/workspaces/portfolio/src/components/stars/star';
import { clamp } from '/workspaces/portfolio/src/components/stars/math.util';

export class Galaxy {
  canvas: HTMLCanvasElement;
  canvasDimensionsElement = document.querySelector('.app__canvasDimensions') as HTMLElement;
  ctx: CanvasRenderingContext2D | null = null;
  width = 0;
  height = 0;
  maxStars = 2500;
  stars: Star[] = [];
  requestAnimationFrameID = 0;
  resizeTimeoutID = 0;
  speedY = 0;
  maxSpeed = 225;
  scrollBufferRange = [5, 25];
  stats = new Stats();

  constructor(canvas: HTMLCanvasElement) {
    this.tick = this.tick.bind(this);
    this.init(canvas);
  }

  init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.updateDimensions();
    this.createStars();
    this.start();

    this.stats.showPanel(0);
    document.body.appendChild(this.stats.dom);
  }

  updateDimensions() {
    if (!this.canvas || !this.canvasDimensionsElement) return false;

    const { width: prevWidth, height: prevHeight } = this;

    this.canvas.width = this.width = this.canvasDimensionsElement.clientWidth;
    this.canvas.height = this.height = this.canvasDimensionsElement.clientHeight;

    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    return this.width !== prevWidth || this.height !== prevHeight;
  }

  createStars() {
    const glowCanvas = Star.createGlowCanvas();
    if (!glowCanvas) return;

    const maxDimension = Math.max(this.width, this.height);
    const hypotenuse = Math.round(Math.sqrt(2 * (maxDimension ** 2)));
    const orbitRadiusRange = [0, hypotenuse / 4]; // reduced radius for point-like effect

    for (let i = 0; i < this.maxStars; ++i) {
      this.stars[i] = new Star({
        glowCanvas,
        orbitX: this.width / 2,
        orbitY: this.height / 2,
        orbitRadiusRange,
        secondsToFullRotation: 60 * 5,
      });
    }
  }

  resizeCanvas(stopAnimation = false) {
    if (stopAnimation) this.stop();

    window.clearTimeout(this.resizeTimeoutID);
    this.resizeTimeoutID = window.setTimeout(() => {
      const hasViewportResized = this.updateDimensions();
      if (!hasViewportResized) return;

      if (!stopAnimation) this.stop();
      this.createStars();
      this.start();
    }, 250);
  }

  start() {
    this.canvas.style.opacity = '1';
    this.tick();
  }

  stop(hideCanvas = false) {
    cancelAnimationFrame(this.requestAnimationFrameID);
    if (hideCanvas && this.canvas) {
      this.canvas.style.opacity = '0';
    }
  }

  tick() {
    if (!this.ctx) return;
    const { ctx, width, height, stars, stats } = this;

    stats.begin();

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    this.speedY = 0.001;

    for (let i = 0; i < stars.length; ++i) {
      stars[i].draw(ctx, this.speedY);
    }

    stats.end();
    this.requestAnimationFrameID = requestAnimationFrame(this.tick);
  }

  updatePhysics({ accelerateY }: { accelerateY?: number }) {
    if (accelerateY !== undefined) {
      const factor = clamp(
        Math.abs(this.speedY),
        this.scrollBufferRange[0],
        this.scrollBufferRange[1]
      ) / this.scrollBufferRange[1];
      this.speedY = clamp(this.speedY + factor * accelerateY, -this.maxSpeed, this.maxSpeed);
    }
  }
}
