import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const formatValue = (value: number): string =>
  Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
