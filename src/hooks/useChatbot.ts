
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { trainingData } from "@/data/trainingData";
import { prepareTrainingData, createModel, vocabulary } from "@/utils/training";
import { textToVector } from "@/utils/texToVector";



type IntentResponse = {
  intent: string;
  confidence: number;
};

export function useChatbot() {
  const [model, setModel] = useState<tf.Sequential | null>(null);
  const [intentMap, setIntentMap] = useState<Record<string, number>>({});

  useEffect(() => {
    const train = async () => {
      const data = prepareTrainingData();
      const model = await createModel(vocabulary.length, Object.keys(data.intentIndexMap).length);
      await model.fit(data.texts, data.labels, {
        epochs: 100,
        batchSize: 8,
        shuffle: true,
      });

      setModel(model);
      setIntentMap(data.intentIndexMap);
    };

    train();
  }, []);

  const detectIntent = async (text: string): Promise<IntentResponse | null> => {
    if (!model) return null;

    const vector = textToVector(text, vocabulary);
    const prediction = model.predict(tf.tensor2d([vector])) as tf.Tensor;
    const predictionData = await prediction.data();
    prediction.dispose();

    let maxIndex = 0;
    let maxValue = predictionData[0];

    for (let i = 1; i < predictionData.length; i++) {
      if (predictionData[i] > maxValue) {
        maxIndex = i;
        maxValue = predictionData[i];
      }
    }

    const intent = Object.keys(intentMap).find((key) => intentMap[key] === maxIndex);
    return intent ? { intent, confidence: maxValue } : null;
  };

  const getResponse = (intent: string) => {
    const responses = trainingData[intent]?.responses;
    return responses?.[Math.floor(Math.random() * responses.length)] ?? null;
  };

  return { detectIntent, getResponse };
}

