export interface Dev {
  _id: string
  github_username: string
  name: string
  avatar_url: string
  bio: string
  techs: string[]
  latitude: number
  longitude: number
}

export interface CreateDev {
  github_username: string
  techs: string
  latitude: string
  longitude: string
}
