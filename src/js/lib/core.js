const __ = function (selector) {
  return new __.prototype.init(selector);
};

__.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

__.prototype.init.prototype = __.prototype;

window.__ = __;

export default __;
