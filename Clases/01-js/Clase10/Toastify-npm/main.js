console.log("hola mundo");


// Usar el paquete Tostify
import Toastify from "toastify-js/src/toastify-es.js";   

Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #eb2f12, #111111)",
    },
  onClick: function(){} // Callback after click
}).showToast();