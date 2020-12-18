import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

interface TotalProps {
  total?: boolean;
}

export const Container = styled.SafeAreaView`
  /* flex: 1; */
`;

export const Wrapper = styled.View`
  background: ${({theme}) => theme.colors.blue};
  height: 180px;
`;

export const CardContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  paddingHorizontal: 18,
})`
  margin-top: -160px;
`;

export const Card = styled.View<TotalProps>`
  ${({total, theme}) =>
    theme &&
    css`
      background: ${total ? theme.colors.orange : theme.colors.shapeMain};
      position: relative;
      width: 300px;
      padding: 19px 23px 42px;
      margin-right: 16px;
      border-radius: 5px;
      elevation: 5;
    `}
`;

export const CardTitle = styled.Text<TotalProps>`
  ${({theme, total}) =>
    theme &&
    css`
      color: ${total ? theme.colors.shapeMain : theme.colors.title};
      font-family: ${theme.fonts['Poppins-Regular']};
      font-size: 14px;
    `}
`;

export const CardPrice = styled.Text<TotalProps>`
  ${({total, theme}) =>
    theme &&
    css`
      color: ${total ? theme.colors.shapeMain : theme.colors.title};
      font-family: ${theme.fonts['Poppins-Regular']};
      font-size: 30px;
      margin-top: 55.5px;
    `}
`;

export const CardDescription = styled.Text<TotalProps>`
  ${({theme, total}) =>
    theme &&
    css`
      color: ${total ? theme.colors.shapeMain : theme.colors.text};
      font-family: ${theme.fonts['Poppins-Regular']};
      font-size: 12px;
      margin-top: 0;
    `}
`;

export const TotalIcon = styled(FeatherIcon)`
  position: absolute;
  top: 20px;
  right: 23px;
`;

export const ArrowIcon = styled(EvilIcon)`
  position: absolute;
  top: 20px;
  right: 23px;
`;
