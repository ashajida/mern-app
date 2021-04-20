import { 
    Section,
    Wrapper,
    Heading,
    Form,
    FormContainer as Container,
    InputWrapper, 
    Input,
    SubmitButton as Button,
} from "./Register.elements";
import { Fragment, useState } from "react";
import { useForm } from "../../hooks/Auth/useForm";
import { InputMessage } from "../Elements.extend";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {

    const history = useHistory();

    const [values, setValues] = useState({
        email: '',
        username: '',
        password: ''
    });

    const [authError, setAuthError] = useState({
        error: false,
        message: ''
    });

    const submitCb = () => {
        const { username, password, email } = values;
        fetch('/api/register', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            if(res.status !== 201) {
                return setAuthError({
                    message: 'User Already Exists',
                    error: true
                })
            };
            history.push('/dashboard');
        })
       .catch((err) => {
           console.log(err)
        });
    }

    const { 
        handleChange, 
        submit,  
        passwordError,
        emailError,
        usernameError
     } = useForm(values, setValues, submitCb, 'REGISTER');


    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Register</Heading>
                        <Form onSubmit={submit}>
                            {authError.error && <InputMessage>{authError.message}</InputMessage>}
                            <InputWrapper>
                                {emailError.error &&  <InputMessage>{emailError.message}</InputMessage>}
                                <Input 
                                name="email" 
                                onChange={handleChange} 
                                type="email" 
                                placeholder="Email" 
                                value={values.email} />
                            </InputWrapper>
                            <InputWrapper>
                                {
                                    usernameError.error
                                     && 
                                     <InputMessage>{usernameError.message}</InputMessage>
                                    }
                                <Input 
                                name="username" 
                                onChange={handleChange} 
                                type="text" 
                                placeholder="Username" 
                                value={values.username} />
                            </InputWrapper>
                            <InputWrapper>
                            {passwordError.error &&  <InputMessage>{passwordError.message}</InputMessage>}
                                <Input 
                                name="password"
                                onChange={handleChange}
                                type="password" 
                                placeholder="Password" 
                                value={values.password} />
                            </InputWrapper>
                            <InputWrapper>
                                <Button type="submit">Submit</Button>
                            </InputWrapper>
                        </Form>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}


export default RegisterForm;