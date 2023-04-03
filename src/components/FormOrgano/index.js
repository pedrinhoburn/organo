import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import FieldText from '../FieldText';
import './FormOrgano.css';

const FormOrgano = (props) => {   

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSave = (e) => {        
            e.preventDefault(); 
            props.whenMemberRegistred({
                name,
                role,
                image,
                team
            })
            setName('')
            setRole('')
            setImage('')
            setTeam('')    
    }
        
    return (
        <section className='form-organo'>
            <form onSubmit={whenSave}>
                <h2>Preencha os dados dos Docentes</h2>
                <FieldText 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    value={name} 
                    whenChanged={value => setName(value)}
                />
                <FieldText 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    value={role}
                    whenChanged={value => setRole(value)}
                />
                <FieldText 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)} 
                />
                <DropdownList 
                    label="Time" 
                    itens={props.teams} 
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default FormOrgano;