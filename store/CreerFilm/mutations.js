export default {
  /**
   * Update chapter videos list
   * @param state
   * @param chapterMovies
   */
  setChapterMovies (state, chapterMovies) {
    state.chapterMovies = chapterMovies
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
    state.selectedMovies.push(state.activeVideo)
    state.activeVideo = undefined
  }
}
