import './App.css';

import React from "react";
import TabletWrapper from './components/modern-view/TabletWrapper';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  const isMobile = navigator.userAgentData.mobile || window.innerWidth <= 768;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TabletWrapper isMobile={isMobile}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
