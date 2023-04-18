// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
// AWS.config.update({region: 'us-east-2'});
//AWS.config.update({region: 'REGION'});	// Reads from environment var AWS_REGION.

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'Music',
  Key: {
    'Artist': {S: 'Post Malone'},
	'SongTitle' : {S: 'Sunflower'}
  },
  UpdateExpression: "set AlbumTitle = :album",
  ExpressionAttributeValues : {":album":{"S":"OST - Spiderman: Into the Spider-Verse"}}
};

// Call DynamoDB to create the item in the table.
ddb.updateItem(params, function(err, data) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Success", data);
  }
});
