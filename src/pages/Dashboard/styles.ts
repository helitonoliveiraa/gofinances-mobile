import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

interface TotalProps {
  total?: boolean;
}

interface ListPriceProps {
  type: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Background = styled.View`
  position: relative;
  background: ${({theme}) => theme.colors.green};
  height: 180px;
`;

export const ScrollCardContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  position: absolute;
  bottom: -46px;
`;

export const Card = styled.View<TotalProps>`
  ${({total, theme}) =>
    theme &&
    css`
      background: ${total ? theme.colors.orange : theme.colors.shapeMain};
      position: relative;
      width: 300px;
      height: 200px;
      padding: 19px 23px;
      margin: 6px ${total ? '0px' : '16px'} 6px 0px;
      border-radius: 5px;
      margin-top: 6px;

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

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 70px;
  padding: 0 20px 0 24px;
  height: 55%;
`;

export const Title = styled.Text`
  ${({theme}) =>
    theme &&
    css`
      font-family: ${theme.fonts['Poppins-Regular']};
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    `}
`;

export const ScrollList = styled.ScrollView`
  padding-right: 3px;
`;

export const ListCard = styled.View`
  ${({theme}) =>
    theme &&
    css`
      background: ${theme.colors.shapeMain};
      padding: 17px 24px;
      border-radius: 5px;
      margin-bottom: 16px;
      margin-right: 3px;
    `}
`;

export const ListCardDescription = styled.Text`
  ${({theme}) =>
    theme &&
    css`
      font-family: ${theme.fonts['Poppins-Regular']};
      font-size: 14px;
      color: ${theme.colors.title};
    `}
`;

export const ListPrice = styled.Text<ListPriceProps>`
  ${({theme, type}) =>
    theme &&
    css`
      font-family: ${theme.fonts['Poppins-Regular']};
      font-size: 20px;
      color: ${type === 'income' ? theme.colors.green : theme.colors.red};
    `}
`;

export const ListFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 19px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const CategoryIcon = styled(FeatherIcon)`
  margin-right: 12px;
`;

const footerStyle = css`
  ${({theme}) =>
    theme &&
    css`
      font-family: ${theme.fonts['Poppins-Regular']};
      font-size: 14px;
      color: ${theme.colors.text};
    `}
`;

export const Category = styled.Text`
  ${footerStyle}
`;

export const ListDate = styled.Text`
  ${footerStyle}
`;
