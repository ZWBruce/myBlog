"use strict";

var path = require('path');

var fs = require('fs');

var getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath'); // Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637


var appDirectory = fs.realpathSync(process.cwd());

var resolveApp = function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}; // We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.


var publicUrlOrPath = getPublicUrlOrPath(process.env.NODE_ENV === 'development', require(resolveApp('package.json')).homepage, process.env.PUBLIC_URL);
var moduleFileExtensions = ['web.mjs', 'mjs', 'web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx']; // Resolve file paths in the same order as webpack

var resolveModule = function resolveModule(resolveFn, filePath) {
  var extension = moduleFileExtensions.find(function (extension) {
    return fs.existsSync(resolveFn("".concat(filePath, ".").concat(extension)));
  });

  if (extension) {
    return resolveFn("".concat(filePath, ".").concat(extension));
  }

  return resolveFn("".concat(filePath, ".js"));
}; // config after eject: we're in ./config/


module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('app/static'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  comSrc: resolveApp('src/components'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrlOrPath: publicUrlOrPath
};
module.exports.moduleFileExtensions = moduleFileExtensions;