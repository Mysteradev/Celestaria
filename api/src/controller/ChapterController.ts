import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Chapter } from '../entity/Chapter'

export class ChapterController {
  static async findAll (request: Request, response: Response) {
    const chapterRepository = getRepository(Chapter)

    const chapters = await chapterRepository.findAndCount()

    response.send(chapters)
  }
}
