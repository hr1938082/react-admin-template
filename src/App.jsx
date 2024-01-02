import { CssBaseline } from '@mui/material';
import React, { memo } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { lightTheme } from './Theme.config';
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Main from './Layouts/Main/Main';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default memo(App)
