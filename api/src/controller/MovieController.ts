import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import slugify from 'slugify'
import { Movie } from '../entity/Movie'

export class MovieController {
  static async findOneById (request: Request, response: Response) {
    const movieRepository = getRepository(Movie)

    try {
      await movieRepository.findOneOrFail(request.params.id)
    } catch (e) {
      response.status(404).send({ message: 'Aucun film avec cet ID !' })
    }
  }

  static async findOneBySlug (request: Request, response: Response) {
    const movieRepository = getRepository(Movie)
    const { slug } = request.params

    try {
      await movieRepository.findOneOrFail({
        where: { slug }
      })
    } catch (e) {
      response.status(404).send({ message: 'Aucun film ne possède ce slug !' })
    }
  }

  static async findAll (request: Request, response: Response) {
    const movieRepository = getRepository(Movie)

    const movies = await movieRepository.findAndCount()
    response.send(movies)
  }

  static async new (request: Request, response: Response) {
    const movieRepository = getRepository(Movie)

    const { title, chapters, thumbnailUrl } = request.body

    const slug = slugify(title, { lower: true })

    const movie = new Movie()
    movie.title = title
    movie.chapters = chapters
    movie.thumbnailUrl = thumbnailUrl
    movie.slug = slug

    try {
      await movieRepository.save(movie)
      response.send(movie)
    } catch (e) {
      response.status(400).send({ message: "Erreur lors de l'enregistrement du film" })
    }
  }
}
