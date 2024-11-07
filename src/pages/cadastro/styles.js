import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	max-width: 80%;
	margin: 0 auto;
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	gap: 150px;

`

export const Wrapper = styled.div`
	width: 80%;
	height: 100%;
`

export const Column = styled.div`
	flex:1;
`
export const Row = styled.div`
	display:flex;
	flex-direction:row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	div{
		display: flex;
		flex-direction: column;
		width: 90%;
		gap: 11px;

		a{
			color: #fff;
		}
	}


`

export const Title = styled.h2` 
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	width: 388px;
	height: 176px;
	margin-bottom: 20px;
	line-height: 44px;
	justify-content: left;
	color: #ffffff;
`
export const TitleLogin = styled.p` 
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	margin-bottom: 20px;
	line-height: 44px;
	
`
export const SubtitleLogin = styled.p` 
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	margin-bottom: 35px;
	line-height: 25px;
`

export const ToLogin = styled.a` 
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	transition: ease-out .35s;

	span{
		color:  #23DD7A;
	}
	
	&:hover{
		cursor: pointer;
		text-shadow: 0px 0px 8px  #fff;
	}

	&:active{
		opacity: 0.6;
	}
	`

