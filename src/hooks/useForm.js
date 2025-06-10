import { useState } from 'react';

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, text) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

 const setFormValues = (form) => {
    setValues(form);
  };


  const resetValues = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetValues,
    setFormValues
  };
};

export default useForm;