# Prediction History

I wanted a simple way to look at several predictions as a group.

For one market, the things I cared about were:

- how many predictions were made
- total amount
- YES count
- NO count
- latest prediction

I kept this separate from the contract code because I mainly wanted to
experiment with the data structure first.

It also helped me think about how a frontend might display the history
later.

The helper does not try to calculate the final market result.

It only organizes the prediction records.
