import './App.css';

import React, { useState } from "react";

import MobileWrapper from './components/mobile/MobileWrapper';
import TabletWrapper from './components/modern-view/TabletWrapper';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768)

  React.useEffect(() => {
    window.addEventListener("resize", () => setMobile(window.innerWidth <= 768));

  }, []);

  return (
    <ThemeProvider theme={theme}>
      {!isMobile ?
        <div className="App">
          <TabletWrapper />
        </div> :
        <div className="App">
          <MobileWrapper isMobile={isMobile} />
        </div>
      }

    </ThemeProvider>
  );
}

export default App;
