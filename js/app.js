window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var tipoDeCambio = parseFloat(document.getElementById("tipoDeCambio").value);
		var soles = parseFloat(document.getElementById("soles").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>Tu monto es $" + cambio (tipoDeCambio,soles) + "</p>";
	});

	function cambio(tipoDeCambio,soles) {
		return (soles/ tipoDeCambio).toFixed(2);
	}
});