export type Prediction = {
  marketId: bigint;
  side: "YES" | "NO";
  amount: bigint;
  timestamp: bigint;
};

export function addPrediction(
  history: Prediction[],
  prediction: Prediction,
): Prediction[] {
  return [
    ...history,
    prediction,
  ];
}

export function predictionsForMarket(
  history: Prediction[],
  marketId: bigint,
): Prediction[] {
  return history.filter(
    (item) =>
      item.marketId === marketId,
  );
}

export function totalAmount(
  predictions: Prediction[],
): bigint {
  return predictions.reduce(
    (total, prediction) =>
      total + prediction.amount,
    0n,
  );
}

export function countSide(
  predictions: Prediction[],
  side: "YES" | "NO",
): number {
  return predictions.filter(
    (prediction) =>
      prediction.side === side,
  ).length;
}

export function latestPrediction(
  predictions: Prediction[],
): Prediction | undefined {
  if (predictions.length === 0) {
    return undefined;
  }

  return [...predictions].sort(
    (a, b) =>
      a.timestamp < b.timestamp
        ? -1
        : a.timestamp > b.timestamp
          ? 1
          : 0,
  )[predictions.length - 1];
}
