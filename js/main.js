// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

$('button').on('click', function() {
  var input = $('input');
  var tipBtn = $('button');
  var amount = input.val();
  var tip = (amount * 0.2).toFixed(0);
  $('#answer').text("$" + tip);
});

});
