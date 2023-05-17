import styled from 'styled-components'




const Card = styled.div `
display: block;
text-align: center;
    width: 300px;
    height: 100%;
    border: 2px solid black;
	border-radius: 8px;
    margin:0 auto;
    
	`

const Avatar = styled.div`
display:block;
text-align:center;
`
const Img = styled.img`
 width: 100px;
 height: 100px;
  border-radius: 50%;
   border: 2px solid black; 
   margin-top:20px;
`
const UserName = styled.p`
color: black;
font-weight: bold;
`
const UserInfo = styled.p`
color:grey;
font-weight: bold;
`
const List = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin: 0 auto;
padding:0;


`
const Item = styled.li`
display:flex;
flex-direction:column;
align-items:center;
border: 1px solid #5c5454;

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
    Text,
    Img,
    UserName,
    UserInfo
}