import { Request, Response } from 'express'
import { getConnection, getRepository } from 'typeorm'
import { Chapter } from '../entity/Chapter'

export class ChapterController {
  static async findAll (request: Request, response: Response) {
    const chapterRepository = getRepository(Chapter)

    const chapters = await chapterRepository.findAndCount()

    response.send(chapters)
  }

  static async randomChapters (request: Request, response: Response) {
    const connectionManager = getConnection()
    const randomChapters = await connectionManager.query('(select* from chapter where category=\'A\' ORDER BY RAND() limit 1)\n' +
      'UNION\n' +
      '(select* from chapter where category=\'B\' ORDER BY RAND() limit 1)\n' +
      'UNION\n' +
      '(select* from chapter where category=\'C\' ORDER BY RAND() limit 1)\n' +
      'UNION\n' +
      '(select* from chapter where category=\'D\' ORDER BY RAND() limit 1)\n' +
      'UNION\n' +
      '(select* from chapter where category=\'E\' ORDER BY RAND() limit 1)')

    response.send(randomChapters)
  }
}
