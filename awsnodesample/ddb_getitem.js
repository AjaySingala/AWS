// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
// AWS.config.update({region: 'us-east-2'});
//AWS.config.update({region: 'REGION'});	// Reads from environment var AWS_REGION.

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
//var ddb = new AWS.DynamoDB.DocumentClient()

var params = {
  TableName: 'CUSTOMER_LIST',
  Key: {
    'CUSTOMER_ID': {N: '1'},
	'CUSTOMER_NAME' : {S: 'John Smith'}
  },
  ProjectionExpression: 'CUSTOMER_NAME'
  // ProjectionExpression: 'CUSTOMER_NAME, CUSTOMER_CITY'
  // ProjectionExpression: 'CUSTOMER_NAME, CUSTOMER_CITY, CUSTOMER_STATE'
};

// Call DynamoDB to create the item in the table.
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Success", data);
  }
});
