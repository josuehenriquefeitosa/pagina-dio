import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	max-width: 90%;
	margin: 0 auto;
	margin-top: 41px;
	display: flex;
	justify-content: space-between;

`


export const Title = styled.h3` 
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	margin-bottom: 24px;
	line-height: 25px;
	color: #ffffff;
	
`

export const TitleHighLight = styled.h3`
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	margin-bottom: 24px;
	line-height: 25px;
	width: 269px;
	color: #FFFFFF70;
	
`

export const Column = styled.div`
	flex: ${({flex})=> flex};
	padding-right: 24px;

`