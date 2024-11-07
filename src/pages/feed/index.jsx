import { Container, Column, Title, TitleHighLight } from "./styles";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { IoMdSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

export const Feed = () => {
  return (
    <>
      <Header authenticated={true} leftIcon={<IoMdSearch/>} rigthIcon={<FaChevronDown/>}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight> # RANKING 5 TOP DA SEMANA </TitleHighLight>
          <UserInfo
            percentual={80}
            name="Josué Feitosa"
            image="https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4"
          />
          <UserInfo
            percentual={70}
            name="Josué Feitosa"
            image="https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4"
          />
          <UserInfo
            percentual={65}
            name="Josué Feitosa"
            image="https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4"
          />
          <UserInfo
            percentual={60}
            name="Josué Feitosa"
            image="https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4"
          />
          <UserInfo
            percentual={55}
            name="Josué Feitosa"
            image="https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4"
          />
          <UserInfo
            percentual={40}
            name="Josué Feitosa"
            image="https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4"
          />
          <UserInfo
            percentual={38}
            name="Josué Feitosa"
            image="https://avatars.githubusercontent.com/u/92409871?s=400&u=e41a147eba6a541e1ebb26ba2d5e056c8aa7154f&v=4"
          />
        </Column>
      </Container>
    </>
  );
};
