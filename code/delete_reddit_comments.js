/*
 * use RES to load as many comments on one page as possible
 * open browser dev tools console
 * paste code below and click enter to run
 * leave running until complete, re-run as required
 */

var $domNodeToIterateOver = $('.del-button .option .yes'),
    currentTime = 0,
    timeInterval = 1500;

$domNodeToIterateOver.each(function() {

  var _this = $(this);
  currentTime = currentTime + timeInterval;

  setTimeout(function() {
    _this.click();
  }, currentTime);
});
