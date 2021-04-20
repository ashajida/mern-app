import styled from 'styled-components'; 

export const SwitchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
 
  text-align:
`;


export const InputWrapper = styled.div`
    ${
        ({featured}) => {
            if(featured) {
                return`
                    text-align: start;
                    margin-bottom: 20px;
                `;
            }
        }
    }
}`;

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

export const Input = styled.input` 
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

`;


export const SwitchHeading = styled.h4`

`;