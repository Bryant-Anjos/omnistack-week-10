import { Request, Response } from 'express'

import parseStringAsArray from '../utils/parseStringAsArray'

import Dev from '../models/Dev'

class SearchController {
  async index(req: Request, res: Response) {
    const {
      latitude,
      longitude,
      techs,
    }: { latitude: number; longitude: number; techs: string } = req.query

    const techsArray = parseStringAsArray(techs)

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    })

    return res.json({ devs })
  }
}

export default new SearchController()
