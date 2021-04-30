/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { ErrorInfo } from 'react';

class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
