
import {
	ToSearchInputContainer,
	Container,
	Row,
	Menu,
	MenuRight,
	Wrapper,
	Input,
	UserPicture,
	IconContainer
} from './styles'
import {Button} from '../Button'
import logo from '../../assets/logo-dio.png'



export const Header = ({authenticated, leftIcon, rigthIcon})=>{
	return(
		<Wrapper>	
			<Container>
				<Row>
					<img src={logo} alt="Logo da Dio" />
					{authenticated ? (
						<>
							<ToSearchInputContainer>
								{leftIcon ? (<IconContainer>{leftIcon}</IconContainer>):null}
								<Input placeholder='Buscar...'  leftIcon={leftIcon}/>
							</ToSearchInputContainer>
							<Menu>Live Code</Menu>
							<Menu> Global </Menu>
						</>
					) : null}
				</Row>
				<Row>
						{authenticated ? (
							<>
								<UserPicture src='https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4' rigthIcon={rigthIcon}/>
								{rigthIcon ? (<IconContainer>{rigthIcon}</IconContainer>):null}
							</>
						) : (
							<div>
								<MenuRight href='#'>Home</MenuRight>
								<Button title='Entrar'/>
								<Button title='Cadastrar'/>
							</div>
						)}

				</Row>
			</Container>   
		</Wrapper>
)
}     