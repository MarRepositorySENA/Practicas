package com.persona.Backend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.persona.Backend.Entity.Persona;



@CrossOrigin("*")//permite que cualquier dominio tenga acceso a el
@RestController
@RequestMapping("/api/v1/base/persona/")
public class PersonaController  extends BaseController<Persona>{

	

}
