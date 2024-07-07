package com.persona.Backend.IRepository;


import org.springframework.stereotype.Repository;
import com.persona.Backend.Entity.Persona;

@Repository
public interface IPersonaRepository extends IBaseRepository<Persona, Long>{

	
}
