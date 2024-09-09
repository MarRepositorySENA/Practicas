Algoritmo RegistrarPQRS
    Definir documentoIdentidad Como Cadena
    Definir contrasena Como Cadena
    Definir descricion Como Cadena
    
    Escribir "Iniciar sesión en el sistema (Ingresar Documento de Identidad)"
    Leer documentoIdentidad
    
    Escribir "Ingresar Contraseña"
    Leer contrasena
    
    Si documentoIdentidad = "usuario" Y contrasena = "contraseña" Entonces
        Escribir "dar click en el boton pqrs "
		Escribir "dar click en crear un pqrs "
		Escribir "escriba la descripcion "
        Leer descripcion
        
        Escribir "PQRS registrada exitosamente."
		Escribir "se enviara al correo administrativo para dar respuesta al pqrs"
    Sino
        Escribir "Credenciales incorrectas."
		
    FinSi
FinAlgoritmo