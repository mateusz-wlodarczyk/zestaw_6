import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES_ZESTAW6 } from './utils/constans';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './utils/theme';
import { HomePageZestaw6 } from './pages/HomePageZestaw6';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={ROUTES_ZESTAW6.home}
              element={
                <>
                  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                  <HomePageZestaw6 />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
