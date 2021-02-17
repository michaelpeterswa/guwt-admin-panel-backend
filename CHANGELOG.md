# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.3.0](https://github.com/michaelpeterswa/guwt-admin-panel-backend/compare/v1.2.0...v1.3.0) (2021-02-17)


### Features

* added media model, controller, and router for the create path ([9b228b7](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/9b228b7e7eaaa35e003259e6da1c5a1c2cb70e14))
* added tour (model, controller, and router) and bumped model for organizations to support moderators ([5666f32](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/5666f3240192b0eb1f3f6321083cc7b0b9edaa04))
* deleteMedia on both MongoDB and AWS S3 ([c64a6b4](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/c64a6b44a0b1df3a41c72df9faff841844835112))
* ensure that the s3_loc of each piece of media is accessible with tour info ([2671fbc](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/2671fbce230ca55c4740cc682bffe74c2c17fdd8))
* forgot to add apikey authentication, also added getbyid ([5bc320c](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/5bc320c6fb9ec65e68f341dc685b20b7fcca6288))
* included getMedia, still need to stub out the rest! ([368d512](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/368d51228ed647265cacbe1ccec6bc95d4b2a417))


### Bug Fixes

* add prospective membs ([e74975d](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/e74975d2dc71ededde7f638731d4aaa78f6f757c))
* added console.log ([28fc770](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/28fc7707dbb31cb1641ce87a230668d5650dc937))
* added name and description to each stop ([450ad3a](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/450ad3a206d83fb534947dddcd8738eee180c42b))
* added stop number to tour stops and added number of stops to a tour object ([1dd69ee](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/1dd69ee3d199a42275c11b309d14e43360dd0cb3))
* bump port down 1 to pass unit tests on Jenkins ([06655d7](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/06655d79051074acec6d157400a3b4352100ef4f))
* pin MIME type with upload() request, so that images display instead of being downloaded as octet-stream ([f98a54c](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/f98a54c3cc95bf5222fd46fee11129d25efa532e))
* proper routing for 200 and 404 ([f6f04ac](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/f6f04aca8efc9965da51c1e9832797acb0cbda2f))
* removed callback that is in conflict with promise ([2a52720](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/2a527200a89cffa988b339be361d83c7af4e5288))
* **apikey:** added temporary fix to the apikey validation ([0f19b91](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/0f19b919160886653455a88ecb7dbfd4c6dcb64f))

## [1.2.0](https://github.com/michaelpeterswa/guwt-admin-panel-backend/compare/v1.1.0...v1.2.0) (2020-11-18)


### Features

* added apikey route/controller/model to support authentication of requests to actual API ([83ef084](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/83ef08479f7453d692934ec211d4805f8740cb23))
* passport-headerapikey support exists ([1f13dfb](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/1f13dfbed81ccbf636f32c8d2a6ee7cc7defbafb))
* require apikey to modify the organization api ([835dda8](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/835dda80b6452c8fc0d9fd407461e18cb88a33c7))

## 1.1.0 (2020-11-17)


### Features

* created organization API so that it is ready for the frontend ([2cd8ed9](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/2cd8ed9743e720f754bf9df5a1fd8686b565a50d))
* first commit made with GitRepoInitializer ([031846f](https://github.com/michaelpeterswa/guwt-admin-panel-backend/commit/031846f10a3a5160bacc647b19550039388697ad))
