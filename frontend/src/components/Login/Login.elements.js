import styled from "styled-components"
import { Container, FormButton } from "../Elements.extend";

export const Section = styled.section``;

export const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 15px;
`;

export const FormContainer = styled(Container)`
    ${Container}
`;

export const Heading = styled.h2`
    margin-bottom: 60px;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
    margin-bottom: 30px;
    width: 100%;
    text-align: start;
    color: ff0000;
`;

export const Input = styled.input`
    width: 100%;
    outline: none;
    display: block;
    padding: 10px 15px;
    margin-bottom: 30px;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 10px;
`;

export const SubmitButton = styled(FormButton)`
    ${FormButton}
`;

