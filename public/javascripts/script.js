var employees = {}
var department = [];

searchQuery = function(dave) {
	employees = dave;
}

$(document).ready(function(){
	$('.search-term').on('keyup', function(){
		$('.department li').removeClass('active');
		var searchString = ($('.search-term').val()).toLowerCase();
		createSearch(searchString);
	});

	var createSearch = function(searchString) {
		var searchterm = searchString.toLowerCase();
		$('.content').html("");
		for(var n in employees) {
			var firstName = (employees[n].FirstName.DisplayValue).toLowerCase();
			var surname = (employees[n].LastName.DisplayValue).toLowerCase();
			var jobRole = (employees[n].JobRole.DisplayValue).toLowerCase();
			var department = (employees[n].Department.DisplayValue).toLowerCase();
			var email = (employees[n].EmailId.DisplayValue).toLowerCase();
			if (firstName.indexOf(searchterm) > -1 || jobRole.indexOf(searchterm) > -1 || surname.indexOf(searchterm) > -1 || department.indexOf(searchterm) > -1 || email.indexOf(searchterm) > -1) {
				populateDom(employees[n]);
			}
		}
	}

	var populateDom = function(employee) {
		var person = "<div class='person'><div class='image'><div class='image-crop'><img src=" + employee.EmployeeImage + "></div></div><div class='information'><div class='name'>" + employee.FirstName.DisplayValue + " " + employee.LastName.DisplayValue + "</div><div class='job'>" + employee.JobRole.DisplayValue + "</div><div class='job'>" + employee.Department.DisplayValue + "</div><div class='location'>" + employee.Location.DisplayValue + "</div><a class='email' href='mailto:"+ employee.EmailId.DisplayValue +"'>" + employee.EmailId.DisplayValue + "</a><div class='slack'><a href='#'>slack</a></div><div class='git'><a href='#'>git</a></div><ul class='skills'><li class='css'>CSS</li><li class='js'>JS</li><li class='html'>HTML</li></ul></div></div>";
		$('.content').append(person);
	}

	for(var n in employees) {
		var dep = employees[n].Department.DisplayValue;

		if (department.indexOf(dep) <= -1) {
			department.push(dep);
		}
	}

	for (var n in department) {
		$('.department').append("<li>" + department[n] + "</li>");
	}

	$('.department li').on('click', function(){
		$('.department li').removeClass('active');
		$(this).addClass('active');
		var searchString = this.innerHTML
		createSearch(searchString);
	});

	$('.blame').on('click', function(){
		var random = Math.floor(Math.random() * employees.length);
		var searchString = employees[random].EmailId.DisplayValue;
		createSearch(searchString);
	});
});