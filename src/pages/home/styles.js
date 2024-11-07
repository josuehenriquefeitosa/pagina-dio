import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	max-width: 80%;
	margin: 53px auto;
	display: flex;
	flex: row;
	justify-content: space-between;
	align-items: center;

	
`
export const InfosDiv= styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-top: 20px;
`
	

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 368px;
	height: 233px;
`

export const Title = styled.h2` 
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	width: 368px;
	margin-bottom: 20px;
	line-height: 44px;
	color: #ffffff;

`

export const TitleHighLight = styled.span`
	color: #e4105d;
`

export const TextContent = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
width: 420px;
margin-bottom: 20px;
color: #ffffff;
line-height: 21.79px;
text-align: left;

`