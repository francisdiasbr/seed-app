import React from 'react'
import {
  ThemeProvider,
  Button,
  buildTheme,
} from '@naturacosmeticos/natds-react'
import '@naturacosmeticos/natds-icons/dist/natds-icons.css'
import Strains from './Strains/item'

const theme = buildTheme('theBodyShop', 'dark')

function App() {
  const handleSubmit = () => {
    console.log('teste')
  }
  return (
    <ThemeProvider theme={theme} cssPrefix='francss'>
      <Strains />
      <Button onClick={handleSubmit} variant='contained'>
        The Seed App
      </Button>
    </ThemeProvider>
  )
}
export default App
