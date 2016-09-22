var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
// var AWS = require('aws-sdk');
// var s3 = new AWS.S3();
var S3FS = require('s3fs');

var s3fsImplementation = new S3FS('digistorm',{
  region: 'us-west-2'
})



//If bucket not created
//s3fsImplementation.create();


// process.env['AWS_ACCESS_KEY_ID']='AKIAJLLX7B4ICLG2W5UQ';
//  process.env['AWS_SECRET_ACCESS_KEY']='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';




// var destination = path.resolve(__dirname+'/uploads/ppt');
//
//
// var storage = multer.diskStorage({
//
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
//   destination: function (req, file, cb) {
//     cb(null, destination); // Absolute path. Folder must exist, will not be created for you.
//   }
// })


// var upload = multer({storage:storage});
// var savedFilePath;

router.use(multipartyMiddleware);
router.post('/', function(req,res,next){
  //
	// savedFilePath = path.resolve(__dirname+'/uploads/ppt/'+req.file.filename);
	// console.log(savedFilePath);

    // var stream = fs.createReadStream(savedFilePath);

    // AWS.config.region ='us-west-2';

var body = fs.createReadStream(req.files.file.path);

// var s3obj = new AWS.S3({params: {Bucket: 'digistorm', Key:'test1.ppt'}});
// s3obj.upload({Body: body}).
//   on('httpUploadProgress', function(evt) { console.log(evt);}).
//   send(function(err, data) { console.log(err, data) });

//      res.end("uploaded");
//     })


    s3fsImplementation.writeFile('ppt1',body,function(err){
      if(err)
        console.log(err)
      else
        console.log("saved to s3");

        console.log("Now reading from file!!!!");
        res.send('Uploaded');
          //To read the file.
          // s3fsImplementation.readFile('ppt1',function(err,data){
          //   console.log("Reading from file!!!!");
          //   console.log(data);
          // })
    });
  })


module.exports= router;




/**
* Don't hard-code your credentials!
* Export the following environment variables instead:
*
* export AWS_ACCESS_KEY_ID='AKID'
* export AWS_SECRET_ACCESS_KEY='SECRET'
*/

// Set your region for future requests.
//AWS.config.region = 'Oregon';
/*var s3 = new AWS.S3();
console.log('existing buckets===========================');
s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
console.log('============================================\n');*/
// var fs = require('fs');

// console.log('done done');
