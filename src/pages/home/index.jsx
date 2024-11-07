import { useNavigate } from 'react-router-dom'
import {Container,TextContent,Title,TitleHighLight, TitleContainer, InfosDiv} from './styles'
import { Header } from '../../components/Header'
import banner from '../../../src/assets/banner.png'
import { Button } from '../../components/Button'

export const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login')
    }

   return(
    <div>
        <Header />
        <Container>
            <InfosDiv>
                <TitleContainer>
                    <Title> 
                        <TitleHighLight>
                        Implemente
                        <br/>
                        </TitleHighLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                </TitleContainer>
                <Button title='Começar agora' variant='secondary' onClick={ handleClickSignIn} />
            </InfosDiv>
            <div>
                <img src={banner} alt='Imagem principal' />
            </div>
        </Container>
    </div>
   ) 
}