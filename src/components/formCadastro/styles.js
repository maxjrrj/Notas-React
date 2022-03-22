import styled from "styled-components";

export const Form = styled.form`
    background-color: black;
    margin: 50;
    padding: 10px;
    display: flex;
    justifyContent: space-around; 
    width: 50vw;
    margin: 5vh 15vw ;
    

    input {
        borderRadius: 5px;
        width: 15vw;
        height: 5vh; 
        display: inline-block

        
    }
    input::placeholder {
        font-weight: bold;
        font-family: arial-black;  
    }

    textarea::placeholder{
        font-weight: bold;
        font-family: arial-black;
    }

    textarea {
        borderRadius: 5px;
        width: 25vw;
        height: 5vh;
    }
`