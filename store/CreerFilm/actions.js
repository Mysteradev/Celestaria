export default {
  /**
   * Validate a chapter and add it to the selected chapter and increase chapter count
   * @param commit
   */
  validateChapter ({ commit }) {
    commit('addToSelectedChapters')
    commit('setChapterCount')
  }
}
