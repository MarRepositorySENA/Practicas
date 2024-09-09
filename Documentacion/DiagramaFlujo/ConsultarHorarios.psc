Algoritmo ConsultarHorarios
    Definir documentoIdentidad Como Cadena
    Definir contrasena Como Cadena
    Escribir "Iniciar sesión en el sistema (Ingresar Documento de Identidad)"
    Leer documentoIdentidad
    Escribir "Ingresar Contraseña"
    Leer contrasena
    Si documentoIdentidad <> "" Y contrasena <> "" Entonces
        Escribir "Iniciando sesión..."
        Escribir "Credenciales válidas. "
		Escribir "me dirijo al boton visualizar hprarios"
        Escribir "Horarios asignados:"
		Escribir "Mostrar horario asignado segun el rol"
		
    Sino
        Escribir "Documento de identidad y/o contraseña incorrectos."
		Escribir "vuelve a intentar :) "
    FinSi
FinAlgoritmo