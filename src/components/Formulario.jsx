import { useState } from 'react';
import '../css/Formulario.css'

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState(null);

    const enviarFormulario = async () => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.json();
        setEndereco(data);
    }
    
    return (
        <div className='wrapperFormulario'>
            <div className='wrapperFormulario__inscricao'>
                <h3 className='wrapperFormulario__titulo'>Nome Completo</h3>
                <input className='wrapperFormulario__input' type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                <h3 className='wrapperFormulario__titulo'>Telefone</h3>
                <input className='wrapperFormulario__input' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} pattern='[0-9]{2}-[0-9]{2}-[0-9]{5}-[0-9]{5}' placeholder='Ex: 55-75-91234-5678' required/>
                <h3 className='wrapperFormulario__titulo'>CEP</h3>
                <input className='wrapperFormulario__input' type="number" value={cep} onChange={(e) => setCep(e.target.value)} placeholder='Ex: 12345678' required/>
                <button className='wrapperFormulario__button' onClick={enviarFormulario}>Enviar formulário</button>
            </div>
            <div className='wrapperFormulario__endereco'>
                {endereco && (
                    <div className='wrapperFormulario_response'>
                        <h3 className='wrapperFormulario__input'>Logradouro: {endereco.logradouro}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}