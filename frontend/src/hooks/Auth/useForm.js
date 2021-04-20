import { useState } from "react";
import { inputValidation } from "./inputValidation";

export const useForm = (values, setValues, submitCb, type = null) => {


    const [emailError, setEmailError] = useState({
        error: false,
        message: ''
    });

    const [passwordError, setPasswordError] = useState({
        error: false,
        message: ''
    });

   
    const [usernameError, setUsernameError] = useState({
        error: false,
        message: ''
    });
  

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const submit = (e) => {

        e.preventDefault();

        const {email, password, username} = values;

        if(!inputValidation({email, setEmailError, password, username, setPasswordError, setUsernameError}, type)) {
            submitCb();
         }
    }

    return {
        handleChange,
        submit,
        emailError,
        passwordError,
        usernameError,
    }
  
}