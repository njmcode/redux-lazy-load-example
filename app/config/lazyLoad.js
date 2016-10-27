
const lazyLoad = {
  quiz (next, cb) {
    require.ensure(['../containers/QuizContainer.js'], (require) => {
      cb(null, require('../containers/QuizContainer.js').default)
    }, 'quiz')
  },

  settings (next, cb) {
    require.ensure(['../containers/SettingsContainer.js'], (require) => {
      cb(null, require('../containers/SettingsContainer.js').default)
    }, 'settings')
  },

}

export default lazyLoad
