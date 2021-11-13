/* eslint-disable @typescript-eslint/no-explicit-any */
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const TargetImage = styled.img`
  max-width: 300px;
`;

const MobileNet = () => {
  const [predictions, setPredictions] = useState([]);
  const train = async () => {
    tf.tensor1d([1, 2, 3]); // just to load mobilenet
    const img = document.getElementById("test");
    const model = await mobilenet.load();
    const predictions = await model.classify(img as HTMLImageElement);
    setPredictions(predictions as any);
    console.log(predictions);
  };

  useEffect(() => {
    train();
  }, []);

  return (
    <Wrapper>
      <TargetImage id="test" src="/static/images/donut.png" />
      <div>
        {predictions.map((temp: any) => (
          <div>
            {temp.className} {temp.probability}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MobileNet;
