function McIp() {
    /* Get the text field */
    var copyText = document.getElementById("IpMc");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    document.getElementById("card").style.opacity = "1";
 	      document.getElementById("card").style.visibility = "visible";
        document.getElementById("copied").style.opacity = "1";
        document.getElementById("copied").style.visibility = "visible";


         }
         function closed() {
            document.getElementById("card").style.visibility = "hidden";
            document.getElementById("card").style.opacity = "0";
            document.getElementById("copied").style.opacity = "0";
            document.getElementById("copied").style.visibility = "hidden";
  }