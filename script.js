$(document).ready(function() {
    $("#calcular").click(function() {
        var moeda = $("#moeda").val();
        var valor = parseFloat($("#valor").val());
        var taxa;
        
        if (moeda === "usd") {
            taxa = 4.93;
        } else {
            taxa = 5.26;
        }

        var resultado = valor * taxa;
        $("#resultado").text("Valor em reais (BRL): " + resultado.toFixed(2));
    });
});