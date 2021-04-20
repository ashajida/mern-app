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
    ${
        ({featured}) => {
            if(featured) {
                return`
                    text-align: start;
                `;
            }
        }
    }

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
    ${
        ({featured}) => {
            if(featured) {
                return(
                    `
                    opacity: 0;
                    width: 0;
                    height: 0;   
                    &:checked + .slider {
                        background-color: #2196F3;
                      }
                    &:focus + .slider {
                        box-shadow: 0 0 1px #2196F3;
                      }

                      &:checked + .slider:before {
                        -webkit-transform: translateX(26px);
                        -ms-transform: translateX(26px);
                        transform: translateX(26px);
                      }
                                 
                    `
                );
            }
        }
    }
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

export const FeaturedWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
 
`;


export const Label = styled.label`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
border-radius: 34px;
${({isActive}) => {
    if(isActive) {
        return`
        background-color: #2ecc71;
        `;
    }
}}

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        border-radius: 34px;
        transition: .4s;
        border-radius: 50%;
        ${({isActive}) => {
            if(isActive) {
                return`
                left: 0px;
                transform: translateX(100%);
                `;
            }
        }}
      }
`;

export const FeaturedHeading = styled.h4`

`;

export const Option = styled.option``;