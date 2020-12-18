import React from 'react';

import {
  Container,
  Wrapper,
  CardContainer,
  Card,
  CardTitle,
  CardPrice,
  CardDescription,
  ArrowIcon,
  TotalIcon,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Wrapper />
      <CardContainer>
        <Card>
          <CardTitle>Entradas</CardTitle>
          <ArrowIcon name="arrow-up" size={40} color="#12A454" />

          <CardPrice>R$ 18.500,00</CardPrice>
          <CardDescription>Última entrada dia 13 abril</CardDescription>
        </Card>

        <Card>
          <CardTitle>Saídas</CardTitle>
          <ArrowIcon name="arrow-down" size={40} color="#E83F5B" />

          <CardPrice>R$ 18.500,00</CardPrice>
          <CardDescription>Última entrada dia 13 abril</CardDescription>
        </Card>

        <Card total>
          <CardTitle total>Total</CardTitle>
          <TotalIcon name="dollar-sign" size={40} color="#FFFFFF" />

          <CardPrice total>R$ 18.500,00</CardPrice>
          <CardDescription total>Última entrada dia 13 abril</CardDescription>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Dashboard;
