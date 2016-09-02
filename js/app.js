window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var tipoDeCambio = parseInt(document.getElementById("tipoDeCambio").value);
		var soles = parseInt(document.getElementById("soles").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>Tu monto es $" + cambio(tipoDeCambio,soles).toFixed(2) + "</p>";
	});

	function cambio(tipoDeCambio,soles) {
		return soles/ tipoDeCambio;
	}
});