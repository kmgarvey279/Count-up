
$().ready(function() {
  $("#countUp").submit(function() {
  event.preventDefault();
  var countTo = parseInt($("#countToForm").val());
  var countBy = parseInt ($("#countByForm").val());

  if (isNaN(countTo) || isNaN(countBy)) {
    alert("Please fill out both forms with numbers.");
  }

  if (countTo >= 0 && countBy <= 0 || countTo <= 0 && countBy >=0) {
    alert("Please use either two positive or two negative numbers and do not include zeros.");
  }

if (countTo > 0 && countBy > 0) {
  if (countBy > countTo) {
    alert("Error")
  }
  var total = 0;
  for(var index = 1; total < countTo; index += 1) {
	   total = countBy * index;
	    if (total <= countTo) {
	       alert(total);
       }
  }

} else if (countTo < 0 && countBy < 0) {
  if (countBy < countTo) {
    alert("Error")
  }
var total = 0;
for(var index = 1; total > countTo; index += 1) {
	total = countBy * index;
	if (total >= countTo) {
	alert(total);
    }
  }
}

});
});
