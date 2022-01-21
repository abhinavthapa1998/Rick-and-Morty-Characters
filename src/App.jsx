import React from 'react';
import { QueryClientProvider,QueryClient } from "react-query";
import "./components/App.css";
import Characters from "./components/Characters";
const queryClient = new QueryClient();
function App() {
  return (
  
  <div className="App">
    <div className="container"> 
    <QueryClientProvider client={queryClient}>
    <Characters />
    </QueryClientProvider>
    </div>
  </div>
  
  )
};

export default App;
