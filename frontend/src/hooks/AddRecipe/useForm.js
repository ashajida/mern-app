import { useState } from "react";
import { validation } from "./validation";

export const useForm = (values, setValues, submitCb) => {


    const [titleError, setTitleError] = useState({
        error: false,
        message: ''
    });

    const [contentError, setContentError] = useState({
        error: false,
        message: ''
    });

    const [imageError, setImageError] = useState({
        error: false,
        message: ''
    });

    const handleFileChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.files[0]
        });
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const submit = (e) => {

        e.preventDefault();

        const {title, content, image } = values;

        if(!validation({title, content, image, setContentError, setTitleError, setImageError})) {
            return submitCb();
        }
       
    }

    return {
        handleChange,
        handleFileChange,
        submit,
        titleError,
        contentError,
        imageError
    }
  
}