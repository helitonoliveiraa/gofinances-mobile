import React, {useState, useEffect} from 'react';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

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
  List,
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

export interface Transaction {
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
  const [lastIncomeDate, setLastIncomeDate] = useState({});
  const [lastOutcomeDate, setLastOutcomeDate] = useState({});
  const [lastTransaction, setLastTransaction] = useState({});

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const {data} = await api.get('/transactions');

      const transactionsData = data.transactions as Transaction[];
      const balanceData = data.balance as Balance;

      transactionsData.forEach((item) => {
        if (item.type === 'income') {
          setLastIncomeDate(
            format(new Date(item.created_at), 'dd MMMM', {
              locale: ptBR,
            }),
          );
        }

        if (item.type === 'outcome') {
          setLastOutcomeDate(
            format(new Date(item.created_at), 'dd MMMM', {
              locale: ptBR,
            }),
          );
        }

        setLastTransaction(
          format(new Date(item.created_at), 'dd MMMM', {
            locale: ptBR,
          }),
        );
      });

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
            <CardDescription>
              Última entrada dia {`${lastIncomeDate}`}
            </CardDescription>
          </Card>

          <Card>
            <CardTitle>Saídas</CardTitle>
            <ArrowIcon name="arrow-down" size={40} color="#E83F5B" />

            <CardPrice>{balance.outcome}</CardPrice>
            <CardDescription>
              Última saída dia {`${lastOutcomeDate}`}
            </CardDescription>
          </Card>

          <Card total>
            <CardTitle total>Total</CardTitle>
            <TotalIcon name="dollar-sign" size={40} color="#FFFFFF" />

            <CardPrice total>{balance.total}</CardPrice>
            <CardDescription total>01 à {`${lastTransaction}`}</CardDescription>
          </Card>
        </ScrollCardContainer>
      </Background>

      <ListContainer>
        <Title>Listagem</Title>

        <List
          indicatorStyle="white"
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({item: transaction}) => (
            <ListCard>
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
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Dashboard;
