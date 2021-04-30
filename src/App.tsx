import React, { memo } from 'react';
import useGlobalErrorHandler from '@/hooks/useGlobalErrorHandler';
import ErrorBoundary from '@/ErrorBoundary';
import WeatherLayoutPage from '@/components/pages/WeatherLayoutPage';

const App: React.FC = () => {

  useGlobalErrorHandler();

  return (
    <ErrorBoundary>
      <WeatherLayoutPage />
    </ErrorBoundary>
  );
};

export default memo(App);
