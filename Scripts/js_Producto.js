function getParameterByName(name) {
    if (name !== "" && name !== null && name != undefined) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    } else {
        var arr = location.href.split("/");
        return arr[arr.length - 1];
    }
}

function guardarProduto() {

    var idProducto = getParameterByName("idProducto");
    $.ajax({
        type: "POST",
        url: UrlGuardarProducto,
        async: true,
        data: {
            idProducto: idProducto,
            Tipo: document.getElementById("Tipo").value,
            Nombre: document.getElementById("nombre"),
            Descripcion: document.getElementById("descripcion"),
            Cantidad: document.getElementById("cantidad"),
            Costo: document.getElementById("costo"),
        },
        success: function (data) {

            location.href = "../home/Productos"
        },
        error: function (xhr, status, error) {
            alert(error);
        }
    });
}