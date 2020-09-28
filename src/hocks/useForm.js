 import { useState } from 'react';
 
function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    /* const { getAttribute, value } = infosDoEvento.target;  --TypeError: Illegal invocation */
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
      //getAttribute('name'),  --TypeError: Illegal invocation  
      //value  --TypeError: Illegal invocation   
    );
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;