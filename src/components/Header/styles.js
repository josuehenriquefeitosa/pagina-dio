import styled from 'styled-components'


export const Container = styled.div`
	width: 100%;
	max-width: 90%;
	height: 90%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`
export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	img{
		height: 37px;
		width: auto;
	}


	div{
		display: flex;
		justify-content: space-between;
		margin: 0 20px;
	}

`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	
`
export const Wrapper = styled.div`
	background-color:#0A0A0A;
	width: 100%;
	height: 4.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

`

export const ToSearchInputContainer = styled.div`
	width: 275px;
	height: 30px;
	background-color: #2d2d37;
	border-radius: 8px;
	padding: 0px ;
	display:flex;
	align-items: center;
	justify-content: center;
	outline: none;
	//overflow: hidden;
	`

export const IconContainer = styled.div`
	width: 18px;
	height: 30px;
	font-size: 18px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`
					
export const Menu = styled.a`
	
	font-family: 'Open Sans';
	font-style: normal;
	font-size: 18px;
	line-height: 25px;
	color: #ffffff;
	margin: 0 15px;
	text-decoration: none;

`
export const MenuRight = styled.a`

	font-family: 'Open Sans';
	font-style: normal;
	line-height: 25px;
	color: #ffffff;
	margin-right: 12px;
	text-decoration: none;;
	font-size: 18px;
	font-weight: 400;
	text-align: left;

`

export const UserPicture = styled.img`
	width: 42px;
	height: 42px;
	border-radius: 22px;
	border: 2px solid #ffffff;
	margin-right: -10px;
	border: 3px solid #22DD7A;
`

export const Input = styled.input`

	background: transparent;
	flex: 1;
	border:0;
	color: #ffffff;
	outline: none;
	margin-left: -5px;
	height: 30px;
	border-radius: 0 8px 8px 0;
`