import { MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {api} from '../../services/api'
import {Column, Container,Title,TitleLogin,CreateText,Row, SubtitleLogin,Wrapper,ForgotText} from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

const schema = yup.object({
    email: yup.string().email('email não é válido').required("campo obrigatório"),
    password: yup.string().min(3,'No minimo 3 caracteres').required("campo obrigatório"),
}).required();

export const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
    });
    

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            
            if (data.length === 1) {
                navigate('/feed');
            } else if (data.length === 0) {
                navigate('/cadastro');
            } else {
                alert('Email ou senha inválidos');
            }
        } catch (error) {
            alert(error, 'Erro ao fazer login. Tente novamente mais tarde.');
        }
    };

    const handleCreateAccount = () => {
        navigate('/cadastro');
    };


   return(
    <>
        <Header />
        <Container>
            <Column>
                <Title> 
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin> Faça seu cadastro </TitleLogin>
                    <SubtitleLogin> Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="E-mail" errorMessage={errors?.email?.message} name="email" control={control} type="email"   leftIcon={<MdEmail/>} />
                        <Input placeholder="Senha" errorMessage={errors?.password?.message} name="password" control={control}  type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="login"  type="submit" />
                    </form>
                    <Row>
                        <ForgotText> Esqueci minha senha</ForgotText>
                        <CreateText onClick={handleCreateAccount}> Criar conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
   ) 
}