/* Frustrated.JS */
function clickCounter() {
  document.onclick = function(event) {

    document.eventsArr.push(new Date())
    if (document.eventsArr.length > 5){
      for (i= document.eventsArr.length-5; i<=document.eventsArr.length-2; i++){
        if((document.eventsArr[i+1]-document.eventsArr[i])/3+(document.eventsArr[i+2]-document.eventsArr[i+1])/3+(document.eventsArr[i+3]-document.eventsArr[i+2])/3 <= 800){


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


          document.eventsArr = [];
          document.getElementsByTagName("body")[0].dispatchEvent(customerFrustratedEvent);
        }
      }
    } 
  }
};


window.onload = function() {
  document.eventsArr = [];
  clickCounter();
}

