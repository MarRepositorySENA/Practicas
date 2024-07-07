package com.persona.Backend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario extends BaseEntity{
	
	
	@Column(name="usuario", length = 40, nullable= false)
	private String usuario;
	
	@Column(name="contrasenia", length = 40, nullable=false)
	private String contrasenia;
	
	@ManyToOne(fetch = FetchType.EAGER, optional=false)
	@JoinColumn(name="persona_id", nullable=false, unique = true)
	private Persona personaId;

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public Persona getPersonaId() {
		return personaId;
	}

	public void setPersonaId(Persona personaId) {
		this.personaId = personaId;
	}
	
	

}
