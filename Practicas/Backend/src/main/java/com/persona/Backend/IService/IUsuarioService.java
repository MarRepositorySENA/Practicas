package com.persona.Backend.IService;


import java.util.Optional;

import com.persona.Backend.Dto.IDatosUsuarioDto;
import com.persona.Backend.Dto.IValidarDatosUsuarioDto;
import com.persona.Backend.Entity.Usuario;

public interface IUsuarioService extends IBaseService<Usuario>{
	
	Optional<IDatosUsuarioDto> ObtenerDatosUsuario(Long id);

// Forma sin DTO
//	Boolean ValidarDatosUsuario(String usuario, String contrasenia);
	
	Optional<IValidarDatosUsuarioDto> ValidarDatosUsuario(String usuario, String contrasenia);	
	
	
}
