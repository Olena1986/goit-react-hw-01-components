import styled from 'styled-components'

const FriendList = styled.ul`
display:block;
text-align: center;
list-style:none;

`
const FriendItem = styled.li`
width: 300px;
box-shadow: 2px 2px 2px 2px grey;
display:flex;
flex-direction: row;
gap:20px;
align-items:center;
margin:0 auto;

`
const Status = styled.span`
margin-left: 10px;
width: 10px;
	height: 10px;
	border-radius: 100%;
background-color: ${ props => (props.status ? 'green' : 'red') };`

export const FriendStyle = {
    FriendList,
    FriendItem,
    Status,

}