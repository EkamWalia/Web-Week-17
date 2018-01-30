window.onload = function(){

	//Synchornous callbacks
	var fruits = ["banana", "apple", "pear"];
	function callback(fruit){
			console.log(fruit);
	}
	fruits.forEach(callback);
	console.log("done");

	//asynchronous callbacks
	$.ajax({
		type : 'GET',
		url : 'http://date.jsontest.com/',
		success : function(data){
			console.log(data);
		},
		error : function(jqXHR, textStatus, error){
			console.log(error);
		}
	});
	console.log("Done");
}