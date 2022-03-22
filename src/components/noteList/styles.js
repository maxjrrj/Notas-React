import styled from "styled-components";

export const Item = styled.ul`
    margin-top: 10vh;  
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    
        li {
            border: 3px solid black;
            border-radius: 16px;
            padding: 10px;  
            margin: 5px;
            width: 25vw;
            height: 20vh;
        }
`