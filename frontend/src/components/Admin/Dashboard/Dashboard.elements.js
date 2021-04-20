import styled from "styled-components"
import { Container, Button } from "../../Elements.extend";

export const Section = styled.section``;

export const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
`;

export const DashboardContainer = styled(Container)`
    ${Container}
`;

export const Heading = styled.h2`
    margin-bottom: 60px;
`;


export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Row = styled.tr`
    &:nth-child(even) {
        background: #ccc;
    }
    padding: 10px 15px;
    margin-bottom: 20px;
    @media screen and (min-width: 769px) {
        margin-bottom: 0;
    }
`;

export const Data = styled.td`
    display: block;
    text-align: right;
    position: relative;
    padding: 10px 15px;
    border: 1px solid #ddd;
    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }

    &:before {
        content: attr(data-label);
        padding: 0px 15px;
        position: absolute;
        left: 0;
        display: block;
    }
    @media screen and (min-width: 769px) {
        display: table-cell;
        text-align: center;
        &:before {
            display: none;
        }
    }
`;

export const THeading = styled.th`
    border: 1px solid #ddd;
    padding: 10px 15px;
`;

export const THead = styled.thead`
    display: none;
    border: 1px solid #ddd;
    text-align: center;
    @media screen and (min-width: 769px) {
        display: contents;
    }
`;

export const TBody = styled.tbody``;

export const ButtonLink = styled(Button)`
    display: inline-block;
    font-size: 0.8rem;
    padding: 10px;

   ${({red}) => {
       if(red) {
          return `
            background: red;
            &:hover {
                background: red;
            }
          `;
       }
   } }

   ${({left}) => {
        if(left) {
            return`
           
            margin-right: 20px;
            @media screen and (min-width: 796px) {
                margin-bottom: 30px;
            }
            `;
        }
        
    }}  

    @media screen and (min-width: 900px) {
            display: inline;
    }
`;

export const ButtonWrapper = styled.div`
   margin-bottom: 60px;
   a {
       &:first-of-type {
        margin-right: 10px;
       }
     
   }
`;