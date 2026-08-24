import {
  predictionsForMarket,
  totalAmount,
  countSide,
  latestPrediction,
} from "../utils/prediction-history";

const history = [
  {
    marketId: 5n,
    side: "YES" as const,
    amount: 100n,
    timestamp: 10n,
  },
  {
    marketId: 5n,
    side: "NO" as const,
    amount: 70n,
    timestamp: 20n,
  },
  {
    marketId: 6n,
    side: "YES" as const,
    amount: 200n,
    timestamp: 30n,
  },
];

const market =
  predictionsForMarket(
    history,
    5n,
  );

console.log(
  "Predictions for market 5",
);

console.log(
  "=========================",
);

console.log(
  "count:",
  market.length,
);

console.log(
  "total:",
  totalAmount(market).toString(),
);

console.log(
  "YES:",
  countSide(
    market,
    "YES",
  ),
);

console.log(
  "NO:",
  countSide(
    market,
    "NO",
  ),
);

const latest =
  latestPrediction(market);

console.log(
  "latest timestamp:",
  latest?.timestamp.toString(),
);
