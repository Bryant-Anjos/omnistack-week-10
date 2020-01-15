import { Request, Response } from 'express'
import axios from 'axios'

import parseStringAsArray from '../utils/parseStringAsArray'

import Dev from '../models/Dev'

class DevController {
  async show(req: Request, res: Response) {
    const { id } = req.params

    const dev = await Dev.findById(id)

    if (!dev) {
      return res.status(400).json({ error: "User doesn't exists" })
    }

    return res.json(dev)
  }

  async index(req: Request, res: Response) {
    const devs = await Dev.find()

    return res.json(devs)
  }

  async store(req: Request, res: Response) {
    const {
      github_username,
      techs,
      latitude,
      longitude,
    }: {
      github_username: string
      techs: string
      latitude: number
      longitude: number
    } = req.body

    const devExists = await Dev.findOne({ github_username })

    if (devExists) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    )

    const {
      login,
      name = login,
      avatar_url,
      bio,
    }: {
      login: string
      name: string
      avatar_url: string
      bio: string
    } = response.data

    const techsArray: string[] = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    })

    return res.json(dev)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const {
      name,
      avatar_url,
      bio,
      techs,
      latitude,
      longitude,
    }: {
      name: string
      avatar_url: string
      bio: string
      techs: string
      latitude: number
      longitude: number
    } = req.body

    const techsArray: string[] = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }

    const dev = await Dev.findByIdAndUpdate(id, {
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    })

    return res.json(dev)
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params

    const dev = await Dev.findByIdAndDelete(id)

    if (!dev) {
      return res.status(400).json({ error: 'User not found' })
    }

    return res.json(dev)
  }
}

export default new DevController()
