// rename deploy_config_sample.js to deploy_config.js
// and add AWS info before running the deploy command
let config = require('./deploy_config.js');
let s3 = require('s3');
let client = s3.createClient({
  maxAsyncS3: 20,     // default
  s3RetryCount: 3,    // default
  s3RetryDelay: 1000, // default
  multipartUploadThreshold: 20971520, // default (20 MB)
  multipartUploadSize: 15728640, // default (15 MB)
  s3Options: {
    accessKeyId: config.ACCESS_KEY_ID(),
    secretAccessKey: config.SECRET_ACCESS_KEY(),
    region: config.REGION(),
  },
});

let params = {
  localDir: "public/", // folder to sync
  deleteRemoved: true, // default false, whether to remove s3 objects that have no corresponding local file.
  s3Params: {
    Bucket: config.BUCKET_NAME(),
    // Prefix: "/",
    ACL: "public-read",
    // other options supported by putObject, except Body and ContentLength.
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
  },
};

let uploader = client.uploadDir(params);
uploader.on('error', (err) => {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', () => {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', () => {
  console.log("done uploading");
});
