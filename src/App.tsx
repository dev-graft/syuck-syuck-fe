import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Button from "./components/Button/Button";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
  return <button>버튼</button>;
        <button>버튼</button>
    </QueryClientProvider>
  );
};
export default App;
