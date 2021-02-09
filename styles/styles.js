import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
const green = '#00a870'
const green_hover = '#17b890'
// --------------------NEW--------------------
export const UI = styled.div`
    width: 70vw;
    height: 85vh;
    background-color: white;
    box-shadow: 0 0 3px rgba(44, 44, 44, 0.27);
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    font-family: 'JetBrains Mono', monospace;
`

export const Editor = styled.div`
    background: blue;
    height: 100%;
    width: 10px;
    flex-grow: 2;
    font-size: 22px;
    padding: 10px;
`

export const Text = styled.div`
    width: 100%;
    height: 100%;
`

export const Result = styled.div`
    background: green;
    height: 100%;
    width: 10px;
    flex-grow: 1;
`
// --------------------NEW--------------------


// --------------------INDEX--------------------
export const WelcomeDiv = styled.div`
    background: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #4b5960;
`

export const AtButton = styled.a`
    text-decoration: none;
    background-color: ${green};
    color: #fff;
    display: inline-block;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    transition: .3s ease 0s;
    cursor: pointer;
    margin: 40px;
    font-size: 22px;

    &:hover{
        background-color: ${green_hover};
    }
`

export const DescP = styled.p`
    color: #8b989f;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 40px;
` 

export const NameH = styled.h1`
    font-size: 38px;
    font-weight: 700;
    margin: 20px;
    margin-top: 40px;
`
// --------------------INDEX--------------------
