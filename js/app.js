window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        var tipoDeCambio = parseFloat(document.getElementById("tipoDeCambio").value);
        var soles = parseFloat(document.getElementById("soles").value);
        var resultado;
        if(soles && tipoDeCambio){
            resultado=  document.getElementById("resultado");
            resultado.innerHTML = "<p>El resultado es " + cambio(tipoDeCambio,soles) + "</p>";
        } else {
            resultado= document.getElementById("resultado");
            resultado.innerHTML = "<p>Ingrese un valor</p>";
        }
    });
    function cambio(tipoDeCambio, soles) {
        return (soles / tipoDeCambio).toFixed(2);
    }
});