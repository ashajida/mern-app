import styled from "styled-components"
import { Container, FormButton } from "../../Elements.extend";

export const Section = styled.section``;

export const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 15px;
`;

export const AddFormContainer = styled(Container)`
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

    ${({file}) => {
        if(file) {
            return`
                border: 2px dotted #2ecc71;
                border-radius: 20px;
                display: flex;
                justify-content: center;
            `;
        }
    }}
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

export const FileInput = styled.input`
    visibility: hidden;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 200px;
    outline: none;
    display: block;
    padding: 20px 15px;
    margin-bottom: 30px;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 10px;
    resize: none;
`;

export const AddFormButton = styled(FormButton)`
    ${FormButton}
`;

export const FileLabel = styled.label`
    display: block;
    width: 100px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
`;


export const Select = styled.select`
    width: 100%;
    outline: none;
    display: block;
    padding: 10px 15px;
    margin-bottom: 30px;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 10px;
`;

export const Option = styled.option``;