// $(document).ready(function() {

// 	var bedePeepsData = [];

// 	var jsonData={
// 		APIKey: "37ce2890-aa84-4997-b204-2bab98c954c0",
// 		Action: "GetAllEmployeeDetail",
// 		IncludeLeavers:"false"
// 	}

// 	$.ajax({
// 	    url : "https://api.peoplehr.net/Employee",
// 		type: 'post',
// 	    dataType : 'json',
// 		data: JSON.stringify(jsonData),
// 	    success : function(data){

// 	    	for(var i in data.Result) {
// 	    		var Employee = data.Result[i];
// 	    		bedePeepsData.push(Employee);
// 	    	}
// 	    	// $('.employees').html(bedePeepsData[101].FirstName.DisplayValue);

// 	    	// findEmployee(bedePeepsData);

// 	    }, error : function(err){
// 			console.log('error');
// 	      	//YOUR CODE FOR AJAX FAILURE
// 	    }
// 	});

// 	$('.dave').on('click', function(){
// 		alert(bedePeepsData[0].FirstName.DisplayValue);
// 	});

// 	var findEmployee = function() {
// 	}
// });