
var oForm = document.forms[0];
var els = oForm.elements;
var vals;

var front = document.getElementById("front");
var colour = document.getElementById("colour");
var writing = document.getElementById("writing");
var bord = document.getElementById("bord");
var textIn = document.getElementById("message");

document.getElementById('subBtn').onclick = function(e){
	e.preventDefault();
	function loopForm(elements) {

		var passValues = [];
		for (var i = 0; i < elements.length; i++){

			passValues.push(elements[i].value)

		};
		vals = passValues;
		return passValues;

	};

	loopForm(els);
	console.log(vals);

	function change(values) {

		
		if (values[1] = "christmas"){

			front.src = "assets/christmas.jpg";

		} else if (values[1] = "valentines"){

			front.src = "assets/valentines.jpg";

		} else {

			front.src = "assets/birthday.jpg";

		};

		if (values[2] = "celadon"){

			colour.className = "card celadonBackground";

		} else if (values[2] = "graphite"){

			colour.className = "card graphiteBackground";

		} else {

			colour.className = "card roseBackground";

		};

		if (values[3] = "handwriting"){

			writing.className = "handwriting";

		} else if (values[3] = "sketch"){

			writing.className = "sketch";

		} else {

			writing.className = "print";

		};

		if (values[4] = "none"){

			bord.className = "noBorder";

		} else if (values[4] = "thin"){

			bord.className = "smallBorder";

		} else if (values[4] = "thick") {

			bord.className = "bigBorder";

		} else {

			bord.className = "filledBorder";

		};

		writing.innerHTML = values[5];

		return bord;
		return writing;
		return colour;
		return front;


	}

	change(vals);

}

// function myFunction() {
// 		var card = document.getElementById("image");
//     	card.src = "assets/christmas.jpg";
//     	return card;
// 	}



