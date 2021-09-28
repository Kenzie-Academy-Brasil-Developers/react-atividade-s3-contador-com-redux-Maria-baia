import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        background-color: #8ecae6;
        color: #023047;
        font-size: 50px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    button {
        background-color: #ffb703;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 10px;
        color: #fb8500;
        font-size: 25px;
        font-weight: bold;
    }
`