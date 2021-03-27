$(function() {
	 $('form').submit(function(e) {
		var form = $(this);
	  $.ajax({
		type: form.attr('method'),
		url: form.attr('action'),
		data: form.serialize()
	  }).done(function(data) {
			alert(data.text);
	  }).fail(function() {
			alert('error');
	  });
	  e.preventDefault(); 
	});
});