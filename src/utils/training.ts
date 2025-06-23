import * as tf from "@tensorflow/tfjs";
import { trainingData } from "@/data/trainingData";
import { createVocabulary } from "./createVocabulary";
import { textToVector } from "./texToVector";

export const vocabulary = createVocabulary(trainingData);

export function prepareTrainingData() {
  const texts: number[][] = [];
  const labels: number[][] = [];
  const intents = Object.keys(trainingData);
  const intentIndexMap: Record<string, number> = {};

  intents.forEach((intent, index) => {
    intentIndexMap[intent] = index;
  });

  for (const intent in trainingData) {
    trainingData[intent].patterns.forEach((pattern) => {
      texts.push(textToVector(pattern, vocabulary));
      const label = new Array(intents.length).fill(0);
      label[intentIndexMap[intent]] = 1;
      labels.push(label);
    });
  }

  return {
    texts: tf.tensor2d(texts),
    labels: tf.tensor2d(labels),
    intentIndexMap,
  };
}

export async function createModel(vocabSize: number, numClasses: number) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [vocabSize], units: 16, activation: "relu" }));
  model.add(tf.layers.dense({ units: numClasses, activation: "softmax" }));

  model.compile({ optimizer: "adam", loss: "categoricalCrossentropy", metrics: ["accuracy"] });

  return model;
}

