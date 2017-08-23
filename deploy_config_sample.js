// rename this  file to deploy_config.js and fill in your AWS details
const BUCKET_NAME = "";
const ACCESS_KEY_ID = "";
const SECRET_ACCESS_KEY = "";
const REGION = ""; // example: ap-northeast-1

// Export Params
exports.BUCKET_NAME = () => {
  return BUCKET_NAME
}

exports.ACCESS_KEY_ID = () => {
  return ACCESS_KEY_ID
}

exports.SECRET_ACCESS_KEY = () => {
  return SECRET_ACCESS_KEY
}

exports.REGION = () => {
  return REGION
}
