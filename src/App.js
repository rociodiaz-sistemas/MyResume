import './App.css';

import React from "react";
import TabletWrapper from './components/modern-view/TabletWrapper';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TabletWrapper />
      </div>
    </ThemeProvider>
  );
}

export default App;
