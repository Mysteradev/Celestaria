export default {
  /**
   * Update chapter videos list and clear the array before adding new videos
   * @param state
   * @param chapterMovies
   */
  setChapterMovies (state, chapterMovies) {
    state.chapterMovies = chapterMovies
  },

  /**
   * Clear the previously fetched chapters
   * @param state
   */
  clearChapterMovies (state) {
    if (state.chapterMovies.length > 0) {
      state.chapterMovies = []
    }
  },

  /**
   * Set a video to Active video
   * @param state
   * @param id
   */
  setActiveVideo (state, id) {
    if (id) {
      state.activeVideo = id
    }
  },

  /**
   * Auto increment the chapterCount
   * @param state
   */
  setChapterCount (state) {
    state.chapterCount++
  },

  /**
   * Add the active video to an array of selected chapters
   */
  addToSelectedChapters (state) {
    const chapterMovie = state.chapterMovies.filter(movie => movie.id === state.activeVideo)
    state.selectedMovies.push(...chapterMovie)
    state.activeVideo = undefined
  }
}
