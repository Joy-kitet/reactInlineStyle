const customStyle={
    color: ""
  }
  
function time() {
  
    if(new Date().getHours() <= 12) {
      customStyle.color="red"; 
      return "Good Morning";
      
    } else if(new Date().getHours() <= 18) {
      customStyle.color="green";
      return "Good Afternoon";
      
    }
    else {
      customStyle.color="blue";
      return "Good Evening";
    }

  
}
 
 export {time,customStyle };