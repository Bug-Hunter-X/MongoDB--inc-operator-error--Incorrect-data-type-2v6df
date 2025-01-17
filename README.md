# MongoDB $inc operator error: Incorrect data type

This repository demonstrates a common error when using the `$inc` operator in MongoDB: providing a string value instead of a number. This results in an error during the update operation.

## Bug Description

The code attempts to increment the `age` field of a document by '2' (a string).  The `$inc` operator expects a numerical value. This causes an error.

## Solution

The solution involves correcting the data type of the increment value to a number.
