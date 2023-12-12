import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import { Provider } from 'react-redux';

import theme from './styles/theme'
import { store } from './redux/store';

import { PageInicial } from './pages/pageInicial'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Provider store = { store }>
          <PageInicial />  
        </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
