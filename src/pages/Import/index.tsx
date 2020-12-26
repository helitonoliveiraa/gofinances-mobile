import React, {useState, useCallback} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Title,
  Input,
  ButtonsContainer,
  IncomeButton,
  OutcomeButton,
  ButtonText,
  Icon,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const Import: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const [incomeFocus, setIncomeFocus] = useState(false);
  const [outcomeFocus, setOutcomeFocus] = useState(false);

  const navigation = useNavigation();

  const handleSwitch = useCallback((typeTransaction: string) => {
    setType(typeTransaction);

    if (typeTransaction === 'income') {
      setIncomeFocus(true);
      setOutcomeFocus(false);
    } else {
      setOutcomeFocus(true);
      setIncomeFocus(false);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      const data = {
        title,
        value,
        type,
        category,
      };

      if (!title || !value || !type || !category) {
        Alert.alert(
          'Preenchimento incompleto!',
          'Todos os campos são obrigatórios',
        );

        return;
      }

      console.log(data);
      await api.post('transactions', data);

      Alert.alert(
        'Cadastro realizado!',
        'Você já pode conferir seu saldo atualizado.',
      );
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possível realizar essa transação.');
    }

    navigation.navigate('Dashboard');
  }, [title, value, type, category, navigation]);

  return (
    <Container contentContainerStyle={{flex: 1}}>
      <Title>Cadastro</Title>

      <Input
        placeholder="Nome"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Input
        placeholder="Preço"
        style={{marginTop: 0}}
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      <ButtonsContainer>
        <IncomeButton
          incomeFocus={incomeFocus}
          onPress={() => handleSwitch('income')}>
          <Icon name="arrow-up" size={30} />
          <ButtonText>Income</ButtonText>
        </IncomeButton>

        <OutcomeButton
          outcomeFocus={outcomeFocus}
          onPress={() => handleSwitch('outcome')}>
          <Icon name="arrow-down" size={30} />
          <ButtonText>Outcome</ButtonText>
        </OutcomeButton>
      </ButtonsContainer>

      <Input
        placeholder="Categoria"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default Import;
