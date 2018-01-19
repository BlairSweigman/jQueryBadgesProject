$(function() {

  // your code will go here
  $.ajax({
  	url: 'https://www.codeschool.com/users/BlairSweigman.json',
  	
  	dataType: 'jsonp',
  	success: function(response) {
  	$.each(response.courses.completed, function(index, course) {
  			 /* iterate through array or object */
  			 var strBadge = '<div class="course">';
  			 strBadge +='<a href="' + course.url + '" target="_blank">';
  			 strBadge +='<h3>' + course.title + '</h3>';
  			 strBadge += '<img src="' + course.badge + '">';
  			 strBadge += "</a>	</div>";
  			 $('#badges').append(strBadge);
  			 
  		});
  	}
  });
  
});
