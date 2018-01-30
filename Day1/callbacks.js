window.onload = function(){

	//callbacks
	//A callback function is a function passed into another 
	//function as an argument, which is then invoked inside the outer 
	//function to complete some kind of routine or action.
//----------------------------------------------------------------------------------------------------------------------------
	//Synchronous callbacks
	//Example 1 --------------------------------------------------------------------------------------------------------------
	var fruits = ["banana", "apple", "pear"];
	function callback(fruit){
			console.log(fruit);
	}
	fruits.forEach(callback);

	//Example 2 --------------------------------------------------------------------------------------------------------------
	var colors  = ['red', 'orange', 'blue']

	colors.forEach(function(data){
		console.log(data);
	})
//-----------------------------------------------------------------------------------------------------------------------------
	//Asynchronous callbacks
	$.ajax({
		type : 'GET',
		url : 'http://date.jsontest.com/',
		success : function(data){
			console.log(data);
		},
		error : function(jqXHR, textStatus, error){
			//Error handling in case the GET request to the URL fails and doesnt give a fruitful response
			//A function to be called if the request fails. The function receives three arguments: The jqXHR
			// object, a string describing the type of error that occurred and an optional exception object, 
			//if one occurred. Possible values for the second argument (besides null) are "timeout", "error",
			// "abort", and "parsererror". When an HTTP error occurs, errorThrown receives the textual portion 
			// of the HTTP status, such as "Not Found" or "Internal Server Error." 
			console.log(error);
		}
	});
	console.log("Done");//"Done" gets printed on the console first as AJAX request to the URL is asynchronous but I/O is not blocked
}
//------------------------------------------------------------------------------------------------------------------------------