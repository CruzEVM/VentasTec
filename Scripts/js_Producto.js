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

    var IdProducto = getParameterByName("IdProducto");
    $.ajax({
        type: "POST",
        url: UrlGuardarProducto,
        async: true,
        data: {
            IdProducto: IdProducto,
            Tipo: document.getElementById("Tipo").value,
            Nombre: document.getElementById("nombre").value,
            Descripcion: document.getElementById("descripcion").value,
            Cantidad: document.getElementById("cantidad").value,
            Costo: document.getElementById("costo").value,
        },
        success: function (data) {
            location.href = "../home/Productos";
        },
        error: function (xhr, status, error) {
            alert(error);
        }
    });
}