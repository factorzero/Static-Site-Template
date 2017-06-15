var s3 = require('s3');
// AWS Settings
var BUCKET_NAME = "";
var ACCESS_KEY_ID = "";
var SECRET_ACCESS_KEY = "";
var REGION = ""; // example: ap-northeast-1

var client = s3.createClient({
  maxAsyncS3: 20,     // default
  s3RetryCount: 3,    // default
  s3RetryDelay: 1000, // default
  multipartUploadThreshold: 20971520, // default (20 MB)
  multipartUploadSize: 15728640, // default (15 MB)
  s3Options: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
  },
});


var params = {
  localDir: "public/", // folder to sync
  deleteRemoved: true, // default false, whether to remove s3 objects that have no corresponding local file.
  s3Params: {
    Bucket: BUCKET_NAME,
    // Prefix: "/",
    ACL: "public-read",
    // other options supported by putObject, except Body and ContentLength.
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
  },
};

var uploader = client.uploadDir(params);
uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', function() {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log("done uploading");
});
