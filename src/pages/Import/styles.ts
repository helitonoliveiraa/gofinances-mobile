import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {lighten} from 'polished';

interface ButtonProps {
  incomeFocus?: boolean;
  outcomeFocus?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 16px;
`;

export const Title = styled.Text`
  ${({theme}) =>
    theme &&
    css`
      color: #333;
      font-size: 20px;
      margin-top: 24px;
      font-family: ${theme.fonts['Poppins-Regular']};
    `}
`;

export const Input = styled.TextInput`
  ${({theme}) =>
    theme &&
    css`
      background: ${theme.colors.shapeMain};
      height: 50px;
      padding: 0 16px;
      margin: 24px 0 16px;
      border-radius: 5px;
      font-family: ${theme.fonts['Poppins-Regular']};
    `}
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const buttonStyle = css`
  height: 50px;
  width: 49%;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${({theme}) => lighten(0.26, theme.colors.text)};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IncomeButton = styled.TouchableOpacity<ButtonProps>`
  ${buttonStyle};

  ${({theme, incomeFocus}) =>
    incomeFocus &&
    css`
      background: ${lighten(0.38, theme.colors.green)};
    `};
`;

export const OutcomeButton = styled.TouchableOpacity<ButtonProps>`
  ${buttonStyle};

  ${({theme, outcomeFocus}) =>
    outcomeFocus &&
    css`
      background: ${lighten(0.34, theme.colors.red)};
    `};
`;

export const ButtonText = styled.Text`
  ${({theme}) =>
    theme &&
    css`
      font-family: ${theme.fonts['Poppins-Regular']};
      color: ${theme.colors.title};
      font-size: 14px;
    `}
`;

export const Icon = styled(EvilIcon)`
  ${({name, theme}) =>
    theme &&
    css`
      color: ${name === 'arrow-up' ? theme.colors.green : theme.colors.red};
      margin-right: 12px;
    `}
`;

export const SubmitButton = styled(RectButton)`
  ${({theme}) =>
    theme &&
    css`
      height: 50px;
      margin-top: 20px;
      border-radius: 5px;
      background: ${theme.colors.orange};
      align-items: center;
      justify-content: center;
    `}
`;

export const SubmitButtonText = styled.Text`
  ${({theme}) =>
    theme &&
    css`
      font-size: 14px;
      font-family: ${theme.fonts['Poppins-Medium']};
      color: ${theme.colors.shapeMain};
    `}
`;
