# Getting Started

## Requirements
 - Node: version 6+
 - Yarn: latest

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

Before using the `deploy` command rename `deploy_config_sample.js` to `deploy_config.js` and fill in your AWS details.

terminal:

```
 yarn deploy
```

Does the same as Build, and then uploads any files in the /public directory to an AWS S3 Bucket for release. Cation: this uses the sync command, deleting any files in the bucket that do not exist locally in the `public` folder.


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
