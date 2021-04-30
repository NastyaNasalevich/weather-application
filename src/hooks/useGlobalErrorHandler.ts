import { useEffect, useCallback } from 'react';

export function useGlobalErrorHandler(
) {

  const handleGlobalError = useCallback(
    (event) => {
      if (event.error) {
        console.error(event.error);
      }
      event.stopPropagation();
      event.preventDefault();
    },
    [],
  );

  useEffect(() => {
    window.addEventListener('error', handleGlobalError);
    return () => {
      window.addEventListener('error', handleGlobalError);
    };
  }, [handleGlobalError]);
}

export default useGlobalErrorHandler;
