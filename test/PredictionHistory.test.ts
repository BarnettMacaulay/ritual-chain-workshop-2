import { expect } from "chai";

import {
  addPrediction,
  predictionsForMarket,
  totalAmount,
  countSide,
  latestPrediction,
} from "../utils/prediction-history";

describe("prediction history", function () {
  const first = {
    marketId: 1n,
    side: "YES" as const,
    amount: 100n,
    timestamp: 10n,
  };

  const second = {
    marketId: 1n,
    side: "NO" as const,
    amount: 50n,
    timestamp: 20n,
  };

  const third = {
    marketId: 2n,
    side: "YES" as const,
    amount: 200n,
    timestamp: 30n,
  };

  it("adds a prediction", function () {
    const history =
      addPrediction(
        [],
        first,
      );

    expect(history)
      .to.have.length(1);
  });

  it("filters predictions by market", function () {
    const history = [
      first,
      second,
      third,
    ];

    expect(
      predictionsForMarket(
        history,
        1n,
      ),
    ).to.have.length(2);
  });

  it("calculates total amount", function () {
    expect(
      totalAmount([
        first,
        second,
      ]),
    ).to.equal(150n);
  });

  it("counts YES predictions", function () {
    expect(
      countSide(
        [
          first,
          second,
          third,
        ],
        "YES",
      ),
    ).to.equal(2);
  });

  it("counts NO predictions", function () {
    expect(
      countSide(
        [
          first,
          second,
          third,
        ],
        "NO",
      ),
    ).to.equal(1);
  });

  it("returns the latest prediction", function () {
    const latest =
      latestPrediction([
        first,
        second,
      ]);

    expect(
      latest?.timestamp,
    ).to.equal(20n);
  });

  it("returns undefined for empty history", function () {
    expect(
      latestPrediction([]),
    ).to.equal(undefined);
  });
});
