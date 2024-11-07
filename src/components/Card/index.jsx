
import {FiThumbsUp} from 'react-icons/fi'
import {
	CardContainer,
	 Content,
	 HasInfo,
	 ImageBackground,
	 PostInfo,
	 UserInfo,
	 UserPicture,
} from './styles'

export const Card = () => {
	return (
		<CardContainer>
			<ImageBackground src='https://images.pexels.com/photos/248515/pexels-photo-248515.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
			<Content>
				<UserInfo>
					<UserPicture src='https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4'/>
					<div>
						<h4>Josué Feitosa</h4>
						<p>Há 8 minutos</p>
					</div>
				</UserInfo>
				<PostInfo>
					<h4>Projeto para curso de Html e CSS</h4>
					<p>Projeto feito o curso de html e css no bootcamp do Global avanade...<strong>Saiba Mais</strong></p>
				</PostInfo>
				<HasInfo>
					<h4>#HTML #CSS #Javascript</h4>
					<p>
						<FiThumbsUp /> 10
					</p>

				</HasInfo>
			</Content>
		</CardContainer>
	)
}
