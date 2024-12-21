# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The issue arises when attempting to increment a field that doesn't exist or is not a number.  The provided solution demonstrates how to correctly handle this scenario.

## Bug Description
The bug involves using the `$inc` operator in MongoDB without proper checks, leading to errors or unexpected behavior.  If the targeted field is not present or is not of numeric type, the operation will fail or produce incorrect results.

## Solution
The solution involves using the `$setOnInsert` operator along with `$inc` to handle the case where the field might not exist.