function loadTable() {
    $.ajax({
        url: "http://localhost:9000/base/api/v1/base/usuario/",
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
                            <td>` + Elementos.personaId.primerNombre + `</td> 
                            <td>` + Elementos.personaId.segundoNombre + `</td> 
                            <td>` + Elementos.personaId.tipoDocumento + `</td> 
                            <td>` + Elementos.personaId.numeroDocumento + `</td> 
                            <td>` + Elementos.personaId.telefono + `</td> 
                            <td>` + Elementos.personaId.email + `</td> 
                            <td>` + Elementos.usuario+ `</td> 
                            <td>` + Elementos.contrasenia+ `</td> 

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
    id = $("#id").val() //1
    verificar = !!id
    urlPersona = (verificar ? "http://localhost:9000/base/api/v1/base/persona/"+id : "http://localhost:9000/base/api/v1/base/persona/")
    metodo = (verificar ? "PUT" : "POST" )

    var datos = {
        primerNombre: $("#primerNombre").val(),//val sirve para captura o  envie datos dentro de los parentesis al frontend
        segundoNombre: $("#segundoNombre").val(),
        tipoDocumento: $("#tipoDocumento").val(),
        numeroDocumento: $("#numeroDocumento").val(),
        telefono: $("#telefono").val(),
        email: $("#email").val()

    }
    $.ajax({
        url: urlPersona,
        data: JSON.stringify(datos),
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        // console.log("personaGuardado"): permite depurar y conocer si esta ejecutando
        function (item) {
            console.log(!!item.data)
            idPersona = (!!item.data ? item.data.id : id)
            urlUsuario = (verificar ? "http://localhost:9000/base/api/v1/base/usuario/" + idPersona : "http://localhost:9000/base/api/v1/base/usuario/")
            
            datosUsuario = {
                personaId: {
                    id :  idPersona
                },
                usuario: $("#usuario").val(),
                contrasenia: $("#contrasenia").val()
            }

            $.ajax({
                url: urlUsuario,
                data: JSON.stringify(datosUsuario),
                method: metodo,
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(
                function (item) {
                    loadTable(),
                    clearData(),
                    $('#modalPerson').modal('hide');//eso es para esconder el modal
                }
            )
        }

    )
}


//buscar por Id
function findById(id) {
    $.ajax({
        url: "http://localhost:9000/base/api/v1/base/usuario/"+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
            console.log(item, "algo de revisar")
                $("#id").val(item.id),
                $("#primerNombre").val(item.personaId.primerNombre),
                $("#segundoNombre").val(item.personaId.segundoNombre),
                $("#tipoDocumento").val(item.personaId.tipoDocumento),
                $("#numeroDocumento").val(item.personaId.numeroDocumento),
                $("#telefono").val(item.personaId.telefono),
                $("#email").val(item.personaId.email),
                $("#usuario").val(item.usuario),
                $("#contrasenia").val(item.contrasenia)

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
        $("#email").val(""),
        $("#usuario").val(""),
        $("#contrasenia").val("")
}


