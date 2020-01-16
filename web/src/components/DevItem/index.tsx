import React from 'react'

import { Dev } from '../../interfaces/Dev'

import { Container, UserInfo } from './styles'

const DevItem: React.FC<{ dev: Dev }> = ({ dev }) => (
  <Container>
    <header>
      <img src={dev.avatar_url} alt={dev.name} />
      <UserInfo>
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(', ')}</span>
      </UserInfo>
    </header>
    <p>{dev.bio}</p>
    <a href={`https://github.com/${dev.github_username}`}>
      Acessar perfil no Github
    </a>
  </Container>
)

export default DevItem
