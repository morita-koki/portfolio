"use client"
import { Header } from '@/components/modules/Header'
import './globals.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 159, 64, 0.2)",
      contrastText: '#333333',
    },
    secondary: {
      main: "rgba(34, 202, 236, .2)"
    },
    info: {
      main: "rgba(255, 99, 132, 0.2)"
    },
    background: {
      default: '#FFFCF8',
    },
    text: { primary: '#333333' }
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sections = ['about', 'profile', 'skills', 'products', 'contact'];
  return (
    <html>
      { }
      <head />
      <body>
        <Header sections={sections}/>
        <Box
          sx={{
            // background: '#FFF0d8',
            paddingTop: "10vh",
            zIndex: 1,
            minHeight: "100vh"
          }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Box>
      </body>
    </html>

  )
}
