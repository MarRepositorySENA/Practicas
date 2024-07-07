function loadTable() {
    $.ajax({
        url: "http://localhost:9000/base/api/v1/base/persona/",
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
            variable = ""
            item.forEach(function (Elementos, posicion, array) {
                variable += `<tr>
                            <td>` + parseInt(posicion + 1) + `</td> 
                            <td>` + Elementos.primerNombre + `</td> 
                            <td>` + Elementos.segundoNombre + `</td> 
                            <td>` + Elementos.tipoDocumento + `</td> 
                            <td>` + Elementos.numeroDocumento + `</td> 
                            <td>` + Elementos.telefono + `</td> 
                            <td>` + Elementos.email + `</td> 
                            <td> <button type="button" class="btn btn-warning" onclick="findById(${Elementos.id})" data-bs-toggle="modal" data-bs-target="#modalPerson"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td> 
                            </tr> `

            });

            $("#dataResult").html(variable)
        }
    )
}
//metodo de guardar

function savePerson() {
    var datos = {
        primerNombre: $("#primerNombre").val(),//val sirve para captura o  envie datos dentro de los parentesis al frontend
        segundoNombre: $("#segundoNombre").val(),
        tipoDocumento: $("#tipoDocumento").val(),
        numeroDocumento: $("#numeroDocumento").val(),
        telefono: $("#telefono").val(),
        email: $("#email").val()

    }
    $.ajax({
        url: "http://localhost:9000/base/api/v1/base/persona/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadTable();
            clearData()
        }
    )
}

//buscar por Id
function findById(id) {
    $.ajax({
        url: "http://localhost:9000/base/api/v1/base/persona/"+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
                $("#id").val(item.id),
                $("#primerNombre").val(item.primerNombre),
                $("#segundoNombre").val(item.segundoNombre),
                $("#tipoDocumento").val(item.tipoDocumento),
                $("#numeroDocumento").val(item.numeroDocumento),
                $("#telefono").val(item.telefono),
                $("#email").val(item.email)
        }
    )
}
//Actualizar o modificar

function update() {
    id=$("#id").val()
    var datos = {
        primerNombre: $("#primerNombre").val(),//val sirve para captura o  envie datos dentro de los parentesis al frontend
        segundoNombre: $("#segundoNombre").val(),
        tipoDocumento: $("#tipoDocumento").val(),
        numeroDocumento: $("#numeroDocumento").val(),
        telefono: $("#telefono").val(),
        email: $("#email").val()

    }
    $.ajax({
        url: "http://localhost:9000/base/api/v1/base/persona/"+id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadTable();
            clearData()
            $('#modalPerson').modal('hide');//eso es para esconder el modal
        }
    )
}



//Eliminar
function Delete(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "http://localhost:9000/base/api/v1/base/persona/" + id,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(
                function (item) {
                    loadTable()

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            ).fail(
                function (item) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: item.responseJSON.message,
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            )
        }
    });




}





function clearData() {
    $("#id").val(""),
        $("#primerNombre").val(""),
        $("#segundoNombre").val(""),
        $("#tipoDocumento").val(""),
        $("#numeroDocumento").val(""),
        $("#telefono").val(""),
        $("#email").val("")
}


