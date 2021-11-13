import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { useEffect, useState } from "react";

const MobileNet = () => {
  const [predictions, setPredictions] = useState([]);
  const train = async () => {
    tf.tensor1d([1, 2, 3]); // just to load mobilenet
    const img = document.getElementById("test");
    const model = await mobilenet.load();
    const predictions = await model.classify(img as HTMLImageElement);
    setPredictions(predictions as any);
  };

  useEffect(() => {
    train();
  }, []);

  return (
    <div>
      <img id="test" src="/dog.jpeg" />
      <div>
        {predictions.map((temp: any) => (
          <div>
            {temp.className} {temp.probability}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNet;
