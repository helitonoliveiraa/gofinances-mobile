import React, {useState, useEffect} from 'react';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Background,
  ScrollCardContainer,
  Card,
  CardTitle,
  CardPrice,
  CardDescription,
  ArrowIcon,
  TotalIcon,
  ListContainer,
  ScrollList,
  Title,
  ListCard,
  ListCardDescription,
  ListPrice,
  ListFooter,
  Wrapper,
  Category,
  CategoryIcon,
  ListDate,
} from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: {title: string};
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const {data} = await api.get('/transactions');

      const transactionsData = data.transactions;
      const balanceData = data.balance as Balance;

      const transactionsFormattedData = transactionsData.map(
        (transaction: Transaction) => {
          return {
            ...transaction,
            formattedValue: formatValue(transaction.value),
            formattedDate: new Date(transaction.created_at).toLocaleDateString(
              'pt-BR',
            ),
          };
        },
      );

      const formattedBalance = {
        income: formatValue(Number(balanceData.income)),
        outcome: formatValue(Number(balanceData.outcome)),
        total: formatValue(Number(balanceData.total)),
      };

      setBalance(formattedBalance);
      setTransactions(transactionsFormattedData);
    }

    loadTransactions();
  }, []);

  return (
    <Container>
      <Background>
        <ScrollCardContainer
          contentContainerStyle={{flexGrow: 1, paddingHorizontal: 16}}>
          <Card>
            <CardTitle>Entradas</CardTitle>
            <ArrowIcon name="arrow-up" size={40} color="#12A454" />

            <CardPrice>{balance.income}</CardPrice>
            <CardDescription>Última entrada dia 13 abril</CardDescription>
          </Card>

          <Card>
            <CardTitle>Saídas</CardTitle>
            <ArrowIcon name="arrow-down" size={40} color="#E83F5B" />

            <CardPrice>{balance.outcome}</CardPrice>
            <CardDescription>Última saída dia 13 abril</CardDescription>
          </Card>

          <Card total>
            <CardTitle total>Total</CardTitle>
            <TotalIcon name="dollar-sign" size={40} color="#FFFFFF" />

            <CardPrice total>{balance.total}</CardPrice>
            <CardDescription total>01 à 13 de abril</CardDescription>
          </Card>
        </ScrollCardContainer>
      </Background>

      <ListContainer>
        <Title>Listagem</Title>

        <ScrollList indicatorStyle="white">
          {transactions.map((transaction: Transaction) => (
            <ListCard key={transaction.id}>
              <ListCardDescription>{transaction.title}</ListCardDescription>
              <ListPrice type={transaction.type}>
                {transaction.type === 'outcome'
                  ? `- ${transaction.formattedValue}`
                  : transaction.formattedValue}
              </ListPrice>

              <ListFooter>
                <Wrapper>
                  <CategoryIcon name="dollar-sign" size={20} color="#969CB2" />
                  <Category>{transaction.category.title}</Category>
                </Wrapper>

                <ListDate>{transaction.formattedDate}</ListDate>
              </ListFooter>
            </ListCard>
          ))}
        </ScrollList>
      </ListContainer>
    </Container>
  );
};

export default Dashboard;
