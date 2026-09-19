const  { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.text("Hello world!", 10, 10);

const botonGuardar = document.getElementById("guardar");

botonGuardar.onclick(() =>{
    doc.save("a4.pdf");
})
