```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({name: 'John'}, {$inc: {age: 2}});
```