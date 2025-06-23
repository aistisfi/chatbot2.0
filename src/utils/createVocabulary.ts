import { trainingDataProps } from "@/data/trainingData";
import { preprocessText } from "./processText";

export const createVocabulary = (trainingData: trainingDataProps): string[] => {
  const vocabulary = new Set<string>();
  for (const intent in trainingData) {
    trainingData[intent].patterns.forEach((pattern) => {
      const words = preprocessText(pattern).split(/\s+/);
      words.forEach((word) => vocabulary.add(word));
    });
  }
  return Array.from(vocabulary);
}
