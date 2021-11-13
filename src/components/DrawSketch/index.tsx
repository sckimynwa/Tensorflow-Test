import * as ms from "@magenta/sketch";
import { LSTMState } from "@magenta/sketch/es5/sketch_rnn/model";
import p5 from "p5";
import React, { FC, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Sketchbook = styled.div``;

const DrawSketch: FC = () => {
  // const sketch = (p: any) => {
  //   let modelLoaded = false;
  //   let dx: number, dy: number;
  //   let x = p.windowWidth / 2.0;
  //   let y = p.windowHeight / 3.0;

  //   let pen = [0, 0, 0];
  //   let previousPen = [1, 0, 0];
  //   const PEN = { DOWN: 0, UP: 1, END: 2 };
  //   let modelState: LSTMState;

  //   const model = new ms.SketchRNN(
  //     "https://storage.googleapis.com/quickdraw-models/sketchRNN/models/cat.gen.json"
  //   );
  //   p.setup = () => {
  //     const containerSize = document
  //       .getElementById("sketch")
  //       ?.getBoundingClientRect();
  //     const screenWidth = Math.floor(containerSize!.width);
  //     const screenHeight = p.windowHeight / 2;
  //     p.createCanvas(screenWidth, screenHeight);
  //     p.frameWeight(60);

  //     model.initialize().then(() => {
  //       modelLoaded = true;
  //       model.setPixelFactor(3.0);
  //       [dx, dy, ...pen] = model.zeroInput();
  //       modelState = model.zeroState();
  //     });
  //   };

  //   p.draw = () => {
  //     if (!modelLoaded) {
  //       return;
  //     }

  //     modelState = model.update([dx, dy, ...pen], modelState);
  //     const pdf = model.getPDF(modelState, 0.45);
  //     [dx, dy, ...pen] = model.sample(pdf);

  //     if (previousPen[PEN.DOWN] == 1) {
  //       p.line(x, y, x + dx, y + dy);
  //     }

  //     x += dx;
  //     y += dy;

  //     previousPen = pen;
  //   };
  // };

  // useEffect(() => {
  //   new p5(sketch);
  // }, []);

  return (
    <Wrapper>
      <Sketchbook id="sketch"></Sketchbook>
    </Wrapper>
  );
};

export default DrawSketch;
