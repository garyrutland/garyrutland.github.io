const Global = new function () {
  this.init = function () {
    $('.copyright').find('.year').html((new Date()).getFullYear());
    $(function () {
      $("[data-toggle='tooltip']").tooltip();
      $("[data-toggle='popover']").popover();
    });
  };
};

$(document).ready(function () {
  Global.init();
});
