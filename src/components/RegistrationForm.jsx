import { useRef, useState } from "react";


export const RegistrationForm = ({onAdd}) => {

    const [errors, setError] = useState({error:false,errorMsg: ""});

    const [form,setForm] = useState({name:"",email:"",phone:""});

    const validarEmail = useRef(null);

    const handleChange = (e) =>{

        const {id,value} = e.target;
        setForm({...form,[id]:value});
        
    }

    
    const validateForm = () =>{
        if(validarEmail.current.value != form.email){
            setError({error:true,errorMsg:"Los emails no coinciden"});
            validarEmail.current.focus();
        }else{
            cleanErrors(); 
            onAdd(form);
        }
            
    }

    const handleSend = (e) =>{
        e.preventDefault();
        validateForm();
    }
    

    const cleanErrors = () => {
        setError({error:false,errorMsg:""});
    }


    return (
      <div className="container-form">
        <h1>Formulario de Registro</h1>
        <form id="registration-form" onSubmit={(e)=>handleSend(e)}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" onChange={(e)=>handleChange(e)} name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={(e)=>handleChange(e)} id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-email" >Confirmar Email:</label>
            <input type="email" id="confirm-email" ref={validarEmail} name="confirm-email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" onChange={(e)=> handleChange(e)} name="phone" pattern="[0-9]{10}" required />
            <small>Ingrese un número de teléfono de 10 dígitos (solo números).</small>
          </div>
          <div className="error-form">
            {errors.error && <p>{errors.errorMsg}</p>}
          </div>
          <div className="form-group">
            <input type="submit" value="Registrar" />
          </div>
        </form>
      </div>
    );
  };