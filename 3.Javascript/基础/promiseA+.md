# ES5实现Promise

在 ES5 中实现一个符合 Promise/A+ 规范的 Promise 可以使用一些基本的 JavaScript 技巧和辅助函数。以下是一个简单的 ES5 Promise 实现示例：

```
function Promise(fn) {
  var self = this;
  self.value = null;
  self.error = null;
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve(value) {
    if (self.value === null) {
      self.value = value;
      self.onResolvedCallbacks.forEach(function(callback) {
        callback(value);
      });
    }
  }

  function reject(error) {
    if (self.error === null) {
      self.error = error;
      self.onRejectedCallbacks.forEach(function(callback) {
        callback(error);
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  var self = this;
  var promise;

  onResolved = typeof onResolved === 'function' ? onResolved : function(value) { return value; };
  onRejected = typeof onRejected === 'function' ? onRejected : function(error) { throw error; };

  if (self.value !== null) {
    promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          var x = onResolved(self.value);
          resolvePromise(promise, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  } else if (self.error !== null) {
    promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          var x = onRejected(self.error);
          resolvePromise(promise, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  } else {
    promise = new Promise(function(resolve, reject) {
      self.onResolvedCallbacks.push(function(value) {
        try {
          var x = onResolved(value);
          resolvePromise(promise, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });

      self.onRejectedCallbacks.push(function(error) {
        try {
          var x = onRejected(error);
          resolvePromise(promise, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  return promise;
};

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError('Chaining cycle detected for promise'));
  } else if (x instanceof Promise) {
    if (x.value !== null) {
      resolve(x.value);
    } else if (x.error !== null) {
      reject(x.error);
    } else {
      x.then(function(value) {
        resolvePromise(promise, value, resolve, reject);
      }, function(error) {
        reject(error);
      });
    }
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    var called = false;

    try {
      var then = x.then;

      if (typeof then === 'function') {
        then.call(x, function(value) {
          if (!called) {
            called = true;
            resolvePromise(promise, value, resolve, reject);
          }
        }, function(error) {
          if (!called) {
            called = true;
            reject(error);
          }
        });
      } else {
        resolve(x);
      }
    } catch (error) {
      if (!called) {
        called = true;
        reject(error);
      }
    }
  } else {
    resolve(x);
  }
}
```