'use client';
import React, { memo } from "react";
let GLOBAL_EE_ANIMATION_FRAME = -1;
import Thankyou from '../public/Thankyou.png';

export const PARTICLE_SUBJECTS: Subjects[] = [
  {
    imageSrc: Thankyou.src,
  },
];

export const SUBJECT_DROP_COLORS = [
  "green",
];

function calculateBrightness(red: number, green: number, blue: number) {
  return Math.sqrt(
    red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
  );
}

export interface Subjects {
  imageSrc: string;
}

interface SubjectsRenderProps {
  onClickExit?: () => void;
  show: boolean;
  config: SubjectsConfig;
  subject: Subjects;
  dropFill: string;
}

interface SubjectsConfig {
  initialVelocityCap: number;
  dropSizeCap: number;
  dropSizeFloor: number;
  detail: number;
  backgroundFill: string;
}

class Particle {
  x: number;
  y: number;
  speed: number;
  velocity: number;
  size: number;
  ctx: CanvasRenderingContext2D | null;
  color: string;

  constructor(
    public readonly canvas: HTMLCanvasElement,
    public readonly grid: number[][],
    public readonly subjectData: SubjectsRenderProps
  ) {
    this.x = Math.random() * canvas.clientWidth;
    this.y = 0;
    this.speed = 0;
    this.velocity = Math.random() * subjectData.config.initialVelocityCap;
    this.size =
      Math.random() * subjectData.config.dropSizeCap +
      subjectData.config.dropSizeFloor;
    this.ctx = canvas.getContext("2d");
    if (this.subjectData.dropFill === "random") {
      this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
        }, 1)`;
    } else {
      this.color = this.subjectData.dropFill;
    }
  }
  update() {
    const yI = Math.floor(
      this.y ? this.y : 0 / this.subjectData.config.detail
    );
    const xI = Math.floor(
      this.x ? this.x : 0 / this.subjectData.config.detail
    );
    if (this.grid.length > yI) {
      if (this.grid[yI].length > xI) {
        this.speed = this.grid[yI][xI];
      }
    }
    const movement = 2.5 - this.speed + this.velocity;
    this.y += movement;
    if (this.y >= this.canvas.height) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
  }
  draw() {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }
}

function beginAnimation(
  canvas: HTMLCanvasElement,
  props: SubjectsRenderProps
): void {
  const image = new Image();
  image.src = props.subject.imageSrc;
  image.addEventListener("load", function() {
    const body = document.getElementsByTagName("body")[0];
    body.setAttribute("class", "stop-scrolling");
    window.scrollTo(0, 0);
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const particlesArray: Particle[] = [];
    const numberOfParticles = 2400;
    const detail = 1;

    if (image.naturalHeight < image.naturalWidth) {
      const imageWidth = canvas.width * 0.5;
      const imageHeight =
        canvas.width * 0.5 * (image.naturalHeight / image.naturalWidth);
      ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        (canvas.width - imageWidth) / 2,
        (canvas.height - imageHeight) / 2,
        imageWidth,
        imageHeight
      );
    } else {
      const imageHeight = canvas.height * 0.5;
      const imageWidth =
        canvas.height * 0.5 * (image.naturalWidth / image.naturalHeight);
      ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        (canvas.width - imageWidth) / 2,
        (canvas.height - imageHeight) / 2,
        imageWidth,
        imageHeight
      );
    }

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grid: number[][] = [];
    for (let y = 0; y < canvas.height; y += detail) {
      const row = [];
      for (let x = 0; x < canvas.width; x += detail) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const brightness = calculateBrightness(red, green, blue) / 100;
        row.push(brightness !== 0 ? brightness : 1);
      }
      grid.push(row);
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas, grid, props));
      }
    }
    init();

    function animate() {
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = props.config.backgroundFill;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0;
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.3;
        particlesArray[i].draw();
      }
      GLOBAL_EE_ANIMATION_FRAME = requestAnimationFrame(animate);
    }
    animate();
  });
}

function cleanUp(canvas: HTMLCanvasElement) {
  const body = document.getElementsByTagName("body")[0];
  body.setAttribute("class", "");
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cancelAnimationFrame(GLOBAL_EE_ANIMATION_FRAME);
}

export function SubjectComponent(props: SubjectsRenderProps): JSX.Element {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvasElement = canvas.current;
    if (props.show && canvas.current) {
      beginAnimation(canvas.current, props);
      window.addEventListener("resize", resize);
    }
    return () => {
      if (canvasElement) {
        window.removeEventListener("resize", resize);
        cleanUp(canvasElement);
      }
    };
  }, [props.show]);

  function resize(): void {
    const canvasElement = canvas.current;
    if (!canvasElement) {
      return;
    }
    cleanUp(canvasElement);
    beginAnimation(canvasElement, props);
  }

  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: -100,
        top: 0,
        left: 0,
        display: "flex",
        color: "white",
      }}
    >
      <canvas
        ref={canvas}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      ></canvas>
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "start",
          padding: "30px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            font: "mono",
            color: "white",
            textAlign: "center",
            padding: "0px 40px 15px 40px",
          }}
        >
        </h3>
      </div>
    </div>
  );
}

const SubjectContainer = memo(function SubjectContainer({
  showAnimation,
}: {
  showAnimation: boolean;
}) {
  const animationDropFill =
    SUBJECT_DROP_COLORS[
    Math.floor(Math.random() * SUBJECT_DROP_COLORS.length)
    ];
  return (
    <div>
      <SubjectComponent
        show={showAnimation}
        subject={{ imageSrc: Thankyou.src }}
        dropFill={animationDropFill}
        config={{
          initialVelocityCap: 5,
          dropSizeCap: 1,
          dropSizeFloor: 0.1,
          detail: 1,
          backgroundFill: "rgba(0, 0, 0, 0.5)",
        }}
      />
    </div>
  );
});

export default SubjectContainer;