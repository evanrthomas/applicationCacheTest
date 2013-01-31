/* Place all the behaviors and hooks related to the matching controller here.
 All this logic will automatically be available in application.js.
 You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
 */

$(function() {
  $.retrieveJSON("/items.json", function (data) { // using jquery offline to get the items data and 
    //alert(data);
  });
});
