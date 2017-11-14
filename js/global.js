var Global = new function () {
  var _self = this;

  this.init = function () {
    $(function () {
      $("[data-toggle='tooltip']").tooltip();
      $("[data-toggle='popover']").popover();
    });
  };
};

$(document).ready(function () {
  Global.init();
});
