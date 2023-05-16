import styled from 'styled-components'

const Card = styled.div `
display: block;
    width: 300px;
    height: 100%;
    margin: 0 auto;
    border: 2px solid black;
	padding: 35px 20px;
	border-radius: 8px;
	background-color: ${props =>
		props.cardIndex % 2 === 0 ? 'lightblue' : 'white'};`

const Avatar = styled.div`
display:block;
text-align:center;
`
const List = styled.ul`
list-style:none;
display:flex;
justify-content:space-between;
margin: 0 auto;
padding:0;

`
const Item = styled.li`
display:flex;
flex-direction:column;

`
const Text = styled.span`
margin-bottom:10px;
color: rgb(110 111 119);
font-weight: bold;
`
export const ProfilStyle = {
    Card,
    Avatar,
    List,
    Item,
    Text
}