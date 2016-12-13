/**
 * Created by wangrunbo on 16/12/13.
 */

// Const define function
function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: false
    })
}


// app
define("PORT", 8080);  // listened port
