import { preprocessText } from "./processText";

export const textToVector = (text: string, vocabulary: string[]): number[] => {
  const vector = new Array(vocabulary.length).fill(0);
  const words = preprocessText(text).split(/\s+/);

  words.forEach((word: string) => {
    const index = vocabulary.indexOf(word);
    if (index !== -1) {
      vector[index] = 1;
    }
  });

  return vector;
};
