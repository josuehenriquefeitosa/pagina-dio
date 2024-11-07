import { MdEmail, MdLock, MdPeople} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {api} from '../../services/api'
import {Column, Container,Title,TitleLogin,ToLogin,Row, SubtitleLogin,Wrapper} from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

//ERRO NESSA PARTE, QUANDO DESCOMENTA

 const schema = yup.object({
     name: yup.string().required("campo obrigatório"),
     email: yup.string().email('email não é válido').required("campo obrigatório"),
     password: yup.string().min(3,'No minimo 3 caracteres').required("campo obrigatório"),
 }).required();



export const Cadastro = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/login');
      };

    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
    });
    

    // const onSubmit = async  (formData) =>  {
    //      try{
    //          const {data} = await  api.post(`users?name=${formData.name}&email=${formData.email}&senha=${formData.password}`);
    //          if(data.length === 1){
    //             navigate('/feed')

    //          }else{
    //             alert('Campos inválidos')
    //          }
    //      }catch{
    //          alert('alerta')
    //      }
    
    // }

    const onSubmit = async (formData) => {
        try {
          const { data: existingUsers } = await api.get(`/users?name=${formData.name}&email=${formData.email}`);
          
          if (existingUsers.length > 0) {
            alert('Usuário já cadastrado com esse nome ou e-mail');
          } else {
            const { data: newUser } = await api.post('/users', {
              name: formData.name,
              email: formData.email,
              senha: formData.password,
            });
      
            if (newUser) {
              navigate('/feed');
            } else {
              alert('Erro ao cadastrar o usuário');
            }
          }
        } catch (error) {
          alert(error, 'Erro na requisição');
        }
      };

   return(
    <>
        <Header />
        <Container>
            <Column>
                <Title> 
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin> Comece agora grátis </TitleLogin>
                    <SubtitleLogin> Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" errorMessage={errors?.name?.message} name="name" control={control} type="text"   leftIcon={<MdPeople/>} />
                        <Input placeholder="E-mail" errorMessage={errors?.email?.message} name="email" control={control} type="email"   leftIcon={<MdEmail/>} />
                        <Input placeholder="Senha" errorMessage={errors?.password?.message} name="password" control={control}  type="password" leftIcon={<MdLock/>}/>
                        <Button title="Criar minha conta" variant="cadastro"  type="submit" />
                    </form>
                    <Row>
                        <div>
                            <p>Ao clicar em criar minha conta grátis, declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                            <ToLogin onClick={handleNavigate}> Já tenho conta.
                                <span> Fazer login</span>
                            </ToLogin>
                        </div>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
   ) 
}