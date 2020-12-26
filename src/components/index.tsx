import React, {useState} from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

import {Container} from './styles';

const DashboardShimmer: React.FC = () => {
  return <Container />;
};

export default DashboardShimmer;
