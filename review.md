# Review: noa/refund

## Request changes

- `js/refund.js:8` applies the 90% refund rate to both the ticket price and service fee. The stated policy excludes the service fee, so `calcRefund(1)` returns `325.8` instead of `315`, and `calcRefund(2)` returns `651.6` instead of `630`. Apply the refund rate to `TICKET_PRICE` only.

## Test results

- `node tests/run.js` fails both refund tests for the issue above.
- The two price-formatting tests also fail on `origin/noa/refund` because its base `origin/main` contains the existing formatting regression. That regression is outside Noa's changes; the local `main` has a separate revert fixing it.

Noa's branch changes only `js/refund.js` and `tests/refund.test.js`. Do not merge until the refund calculation is corrected.