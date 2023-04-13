// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
// AWS.config.update({region: 'us-east-2'});
//AWS.config.update({region: 'REGION'});	// Reads from environment var AWS_REGION.

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'CUSTOMER_LIST',
  Item: {
    'CUSTOMER_ID' : {N: '001'},
    'CUSTOMER_NAME' : {S: 'John Smith'},
    'CUSTOMER_CITY' : {S: 'Mumbai'},
    'CUSTOMER_STATE' : {S: 'Maharashtra'}
  }
};

// Call DynamoDB to create the item in the table.
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Success", data);
  }
});
