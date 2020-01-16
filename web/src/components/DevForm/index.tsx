import React, { useState, useEffect } from 'react'

import { InputBlock, InputGroup, Button } from './styles'

import { CreateDev } from '../../interfaces/Dev'

const DevForm: React.FC<{ onSubmit: (data: CreateDev) => void }> = ({
  onSubmit,
}) => {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude.toString())
        setLongitude(longitude.toString())
      },
      err => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    })

    setGithubUsername('')
    setTechs('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputBlock>
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          className="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </InputBlock>

      <InputBlock>
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          className="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            className="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            className="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </InputBlock>
      </InputGroup>

      <Button type="submit">Salvar</Button>
    </form>
  )
}

export default DevForm
