(function (root, factory) {
if (typeof define === 'function' && define.amd) {
define(factory);
} else if (typeof exports === 'object') {
module.exports = factory;
} else {
root.MYMODULE = factory();
console.log(root.MYMODULE)
}
})(this, function () {

});