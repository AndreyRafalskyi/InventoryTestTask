import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./constants";
import {InventoriesPage} from "./components/pages";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
    const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<InventoriesPage />} />
      </Routes>
    </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
