import React from 'react';

import {
  Container,
  Title,
  Input,
  ButtonsContainer,
  Button,
  ButtonText,
  Icon,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const Import: React.FC = () => {
  return (
    <Container>
      <Title>Cadastro</Title>

      <Input placeholder="Nome" />

      <Input placeholder="Preço" style={{marginTop: 0}} />

      <ButtonsContainer>
        <Button>
          <Icon name="arrow-up" size={30} />
          <ButtonText>Income</ButtonText>
        </Button>

        <Button>
          <Icon name="arrow-down" size={30} />
          <ButtonText>Outcome</ButtonText>
        </Button>
      </ButtonsContainer>

      <Input placeholder="Categoria" />

      <SubmitButton>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default Import;
