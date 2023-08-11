function GooglePlus() {
}

function makeCbWithProcessedResult(callback) {
  return function processCallback(result) {
    return callback.call(this, JSON.parse(result));
  }
}

GooglePlus.prototype.login = function (options, successCallback, errorCallback) {
  cordova.exec(makeCbWithProcessedResult(successCallback), makeCbWithProcessedResult(errorCallback), "GooglePlus", "login", [options]);
};

GooglePlus.prototype.logout = function (successCallback, errorCallback) {
  cordova.exec(makeCbWithProcessedResult(successCallback), makeCbWithProcessedResult(errorCallback), "GooglePlus", "logout", []);
};

GooglePlus.prototype.disconnect = function (successCallback, errorCallback) {
  cordova.exec(makeCbWithProcessedResult(successCallback), makeCbWithProcessedResult(errorCallback), "GooglePlus", "disconnect", []);
};

GooglePlus.prototype.getSigningCertificateFingerprint = function (successCallback, errorCallback) {
  cordova.exec(makeCbWithProcessedResult(successCallback), makeCbWithProcessedResult(errorCallback), "GooglePlus", "getSigningCertificateFingerprint", []);
};

GooglePlus.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.googleplus = new GooglePlus();
  return window.plugins.googleplus;
};

cordova.addConstructor(GooglePlus.install);
