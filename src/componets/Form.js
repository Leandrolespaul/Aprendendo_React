import React from 'react'
import Input from './Input'
import "./Form.css"
import { Button } from './Button'

const Form = () => {
  return (
    <form>
        <div>
        <Input type="text" label="Nome:" placeholder="Digite seu nome"></Input>
        <Input type="text" label="Matrícula:" placeholder="Digite sua matrícula"></Input>
        <Input type="date" label="Data de Nascimento:"></Input>
        <Input type="tel" label="Telefone:" placeholder="ex. (00)00000-0000"></Input>
        <Input type="text" label="CPF:" placeholder="Digite sem ponto ou traços"></Input>
        <Input type="text" label="Endereço" placeholder="Digite seu endereço"></Input>
        </div>
        <div>
        <Input type="number" label="Numero: " placeholder="Digite seu numero"></Input>
        <Input type="text" label="Bairro" placeholder="Digite seu bairro"></Input>
        <Input type="text" label="Cidade:" placeholder="Digite sua cidade"></Input>
        <Input type="text" label="Estado:" placeholder="eDigite seu estado"></Input>
        <Input type="text" label="Unidade onde trabalha:" placeholder="Digite sua unidade onde trabalha"></Input>
        <Button>Enviar</Button>
        </div>
    </form>
  )
}

export default Form