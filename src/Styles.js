//Added components
import styled, { css } from 'styled-components';

//Styles
export const Topbar = styled.div`
	background: black;
	color: #fff;
`
export const Title = styled.h1`
	margin: 0;
    padding: 20px;
    text-align: center;
`
export const SubTitle = styled.h2`
    margin: 0;
    padding: 10px;
    text-align: center;
    text-transform: capitalize;
	  font-size: 14px;

    ${props => props.msg && css`
        color: #009688;
    `}
`

export const span = styled.span`
    float: right;
`

export const Ul = styled.ul`
    padding: 0 10px;
    list-style: none;
    margin: 0;
`

export const List = styled.li`
    padding: 5px 15px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    cursor: pointer;
`

export const Main = styled.div`
	height: 100%;
    min-height: 500px;
    padding: 40px;
    display:flex;
    position:relative;
`
export const totalAmount = styled.h3`
    padding: 20px;
    margin: 0;
    text-align: center;
    font-size: 40px;
    background: #f1eaea;
`

export const Button = styled.button`
    background: black;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100%
    outline: none;
`

export const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 50%;
    background: #ffffff;

    ${props => props.primary && css`
    	width: 30%;
        position: fixed;
        top: 125px;
        right: 9%;
        min-height: 300px;
		text-align: center;
    `}
`