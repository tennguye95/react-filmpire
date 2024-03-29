import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './app/store';
import './index.css';
import ToggleColorModeProvider from './utils/ToggleColorMode';

// const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>
);

// ReactDOM.render(
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//       </ThemeProvider>
//     </Provider>,
//     document.getElementById('root',)
// );

