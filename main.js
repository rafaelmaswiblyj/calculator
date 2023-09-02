const pantalla = document.getElementById("pantalla");
const form = document.getElementById("form");
const botones = document.querySelectorAll(".btn");

//Primero hago que cada vez que presione un boton, el valor se imprima en la pantalla

/*botones.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        e.preventDefault();
        
        const botonApretado = boton.textContent;
        
        if(botonApretado === "C"){
            pantalla.textContent = "0";
            return;
        }
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            } else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }
            catch{
                pantalla.textContent = "Error";
            }
            
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){ 
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }

    });
});
*/

// Load the previous result from localStorage
const previousResult = localStorage.getItem("calculatorResult");
if (previousResult) {
  pantalla.textContent = previousResult;
}

// Update and store the result in localStorage
function updateResult(result) {
  pantalla.textContent = result;
  localStorage.setItem("calculatorResult", result);
}

// Attach event listeners to buttons
botones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();

    const botonApretado = boton.textContent;

    if (botonApretado === "C") {
      updateResult("0");
    } else if (boton.id === "borrar") {
      if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
        updateResult("0");
      } else {
        updateResult(pantalla.textContent.slice(0, -1));
      }
    } else if (boton.id === "igual") {
      try {
        const result = eval(pantalla.textContent);
        updateResult(result);
      } catch {
        updateResult("Error");
      }
    } else {
      if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
        updateResult(botonApretado);
      } else {
        updateResult(pantalla.textContent + botonApretado);
      }
    }
  });
});

