```javascript
// Incorrect use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
```