package com.persona.Backend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Entity.Usuario;

@CrossOrigin("*")//permite que cualquier dominio tenga acceso a el
@RestController
@RequestMapping("/api/v1/base/usuario/")
public class UsuarioController extends BaseController<Usuario> {

}
