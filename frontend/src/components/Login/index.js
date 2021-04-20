import { 
    Section,
    Wrapper,
    Heading,
    Form,
    FormContainer as Container,
    InputWrapper, 
    Input,
    SubmitButton as Button,
} from "./Login.elements";
import { Fragment, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";
import { useForm } from '../../hooks/Auth/useForm';
import { InputMessage } from "../Elements.extend";

const LoginForm = () => {

    const history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [authError, setAuthError] = useState({
        error: false,
        message: ''
    });

    const { setIsAuth } = useContext(AuthContext);

    const submitCb = () => {

        const {email, password} = values;

        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            setIsAuth(true);
            localStorage.setItem('isAuth', true);
            history.push('/dashboard');
        })
        .catch(error => {
            setAuthError({
                message: 'Please try again',
                error: true
            })
        });
    }

    const handleLogin = () => {

        const user = {
            email: 'demo@mail.com',
            password: 'R2q@4y^A75Xo'
        };

        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                email: user.email,
                password: user.password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            setIsAuth(true);
            localStorage.setItem('isAuth', true);
            history.push('/dashboard');
        })
        .catch(error => {
            setAuthError({
                message: 'Please try again',
                error: true
            })
        });
    }

    const { 
            submit,
            handleChange,
            passwordError,
            emailError,
    } = useForm(values, setValues, submitCb, 'LOGIN');


    return (
        <Fragment>
            <Section>
                <Container>
                    <Wrapper>
                        <Heading>Login</Heading>
                        <Form onSubmit={submit}>
                            {authError.error && <InputMessage>{authError.message}</InputMessage>}
                        <InputWrapper>
                                {emailError.error && <InputMessage>{emailError.message}</InputMessage>}
                                <Input 
                                name="email" 
                                onChange={handleChange} 
                                type="email" 
                                placeholder="Email" 
                                value={values.email} />
                            </InputWrapper>
                            <InputWrapper>
                                {passwordError.error && <InputMessage>{passwordError.message}</InputMessage>}
                                <Input 
                                name="password"
                                onChange={handleChange}
                                type="password" 
                                placeholder="Password" 
                                value={values.password} />
                            </InputWrapper>
                            <InputWrapper>
                                <Button>Submit</Button>
                            </InputWrapper>
                        </Form>
                        <Button onClick={ handleLogin }>Demo login</Button>
                    </Wrapper>
                </Container>
            </Section>
        </Fragment>
    );
}


export default LoginForm;