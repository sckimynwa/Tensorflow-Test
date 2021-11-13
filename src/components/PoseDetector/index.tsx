import React, { FC, MutableRefObject, useEffect, useRef } from "react";
import styled from "styled-components";

import { theme } from "@/constants/theme";

const Wrapper = styled.div`
  padding: 32px;
`;

const StreamingVideo = styled.video`
  border: 3px solid ${theme.colors.gray30};
  border-radius: 20px;
`;

const PoseDetector: FC = () => {
  const videoRef = useRef<HTMLVideoElement>();

  const webcamLaunch = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    // const webcamIterator = await tf.data.webcam(videoRef.current);
    // const img = await webcamIterator.capture();
    // img.print();
  };

  useEffect(() => {
    webcamLaunch();
  }, []);

  // const getUserMediaSupported = () => {
  //   return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  // };

  // const onClick = () => {
  //   if (getUserMediaSupported()) {
  //   } else {
  //     console.warn("webcam is not supported in your browser");
  //   }
  // };

  return (
    <Wrapper>
      <StreamingVideo
        ref={videoRef as MutableRefObject<HTMLVideoElement>}
        autoPlay
      />
    </Wrapper>
  );
};

export default PoseDetector;
