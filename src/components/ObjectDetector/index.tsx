/* eslint-disable @typescript-eslint/no-explicit-any */
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import { theme } from "@/constants/theme";

const Wrapper = styled.div`
  padding: 32px;
`;

const ResultWrapper = styled.div`
  margin-top: 50px;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResultLabel = styled.div``;

const ResultProbability = styled.div``;

const StreamingVideo = styled.video`
  width: 646px;
  height: 486px;
  border: 3px solid ${theme.colors.gray30};
  border-radius: 20px;
`;

const Button = styled.button``;

const ObjectDetector: FC = () => {
  const [modelLoading, setModelLoading] = useState<boolean>(false);
  const [predictions, setPredictions] = useState([]);
  const [webcam, setWebcam] = useState<any>();
  const [model, setModel] = useState<mobilenet.MobileNet>();
  const videoRef = useRef<HTMLVideoElement>();

  const webcamLaunch = async () => {
    setModelLoading(() => true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    const webcamIterator = await tf.data.webcam(videoRef.current);
    setWebcam(webcamIterator);

    // mobile net load
    const model = await mobilenet.load();
    setModel(model);
    setModelLoading(() => false);
  };

  const onPredict = async () => {
    const img = await webcam.capture();
    const result = await model?.classify(img);
    setPredictions(result as any);
    console.log(result);
  };

  useEffect(() => {
    webcamLaunch();
  }, []);

  return (
    <Wrapper>
      <StreamingVideo
        ref={videoRef as MutableRefObject<HTMLVideoElement>}
        autoPlay
      />
      <Button onClick={onPredict} disabled={modelLoading}>
        Predict
      </Button>
      <ResultWrapper>
        {predictions.map((prediction: any) => (
          <ResultItem>
            <ResultLabel>{prediction.className}</ResultLabel>
            <ResultProbability>{prediction.probability}</ResultProbability>
          </ResultItem>
        ))}
      </ResultWrapper>
    </Wrapper>
  );
};

export default ObjectDetector;
