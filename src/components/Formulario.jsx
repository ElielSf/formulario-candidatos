import '../css/Formulario.css'

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState(0);

    
    return (
        <div className='wrapperFormulario'>
            <div className='wrapperFormulario__incricao'>
                <input type="text" value={nome} />
                <input type="tel" pattern='[0-9]{2}-[0-9]{2}-[0-9]{5}-[0-9]{5}' value={telefone} />
                <input type="number" value={cep} />
            </div>
            <div className='wrapperFormulario__endereco'></div>
        </div>
    )
}