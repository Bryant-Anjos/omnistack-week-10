import React, { useState, useEffect } from 'react'

import api from './services/api'
import { Dev, CreateDev } from './interfaces/Dev'

import GlobalStyles from './styles/global'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

import { Container, Main, Sidebar } from './styles'

const App: React.FC = () => {
  const [devs, setDevs] = useState<Dev[]>([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(data: CreateDev) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <Container>
      <GlobalStyles />
      <Sidebar>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </Sidebar>

      <Main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </Main>
    </Container>
  )
}

export default App
