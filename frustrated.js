/* Frustrated.JS */
function clickCounter() {
	document.onclick = function(event) {

		document.eventsArr.push(new Date())
		console.log(document.eventsArr);
		for (i= document.eventsArr.length-5; i<=document.eventsArr.length-2; i++){
			if((document.eventsArr[i+1]-document.eventsArr[i])/3+(document.eventsArr[i+2]-document.eventsArr[i+1])/3+(document.eventsArr[i+3]-document.eventsArr[i+2])/3 <= 800){
				document.eventsArr = [];
				console.log(document.eventsArr);
				document.getElementById("body").dispatchEvent(customerFrustratedEvent);
			}
		}
	}
};


var customerFrustrated = new CustomEvent("customerFrustrated");
window.onload = function() {
	document.eventsArr = [];
	clickCounter();
}

var customerFrustratedEvent = new CustomEvent(
	"customerFrustrated", 
	{
		detail: {
			message: "Customer is frustrated!",
			time: new Date(),
		},
		bubbles: true,
		cancelable: true
	}
);

document.addEventListener("customerFrustrated", function(e){ 
	alert("Meow=^.^=");
}, false);


