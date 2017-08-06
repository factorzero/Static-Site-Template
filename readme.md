# Getting Started

## Install Node
- installing via Homebrew is recommended
- if already installed check the version

 - install version 6 or 7. (there is issue with node 8)

terminal:
 ```
 // node 6 or node 7
 brew install node@7

 node --version
 ```

## Install Yarn:
If you have HomeBrew:

```
brew install yarn
```

https://yarnpkg.com/lang/en/docs/install/

## Install Dependencies

terminal:
```
// install all dependencies
// cd to /myproject directory
yarn install
```

## Start
terminal:

```
 yarn start
```

This builds the projects and watches all files, compiling them as you develop and refreshing with browserSync and webpack. Files are output to a directory called
"public". control + c to quit.

## Build
terminal:

```
 yarn build
```

Compiles all file to /public without browserSync and file watching.

## Deploy
terminal:

```
 yarn deploy
```

Does the same as Build, and then uploads any files in the /public directory to an AWS S3 Bucket for release.

### AWS Settings
Input your settings for AWS into `deploy.js`

```
var BUCKET_NAME = "";
var ACCESS_KEY_ID = "";
var SECRET_ACCESS_KEY = "";
var REGION = ""; // example: ap-northeast-1
```

## Dependencies
### Blendid
Project config generator

https://github.com/vigetlabs/blendid

#### Modules
How to use resolve dep like jquery: https://github.com/vigetlabs/blendid#provide

config/task-config.js:
```
javascripts: {
  entry: {
    // files paths are relative to
    // javascripts.dest in path-config.json
    app: ["./app.js"]
  },
  provide: {
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  }
},
```

### AWS CLI
A node.js wrapper for the aws-cli command line interface

https://github.com/Quobject/aws-cli-js

### Node S3
Amazon S3 Client

https://github.com/andrewrk/node-s3-client
