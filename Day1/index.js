window.addEventListener('load', function()
	{
		text = document.getElementById('text');
		container = document.getElementById('container');

		var state = 0;
		var arrayOfColors = ["red", "green", "blue", "yellow", "pink"];

		container.addEventListener('click', function()
		{
			function changeStuff()
			{
				// if(state == true)
				// {
				// 	text.innerHTML = "State True";
				// 	document.body.style.background = "white";
				// 	container.style.background = "black";
				// 	text.style.color = "white";
				// 	state = false;
				// }
				// else
				// {
				// 	text.innerHTML = "State False";
				// 	document.body.style.background = "black";
				// 	container.style.background = "white";
				// 	text.style.color = "black";
				// 	state = true;
				// }
				/* var */ state = (state + 1) % arrayOfColors.length;
				text.innerHTML = arrayOfColors[state];
				container.style.background = arrayOfColors[state];
			}

			setTimeout(changeStuff, 1500);
		});
	});