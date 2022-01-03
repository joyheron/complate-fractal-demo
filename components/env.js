// application-specific context; this will be populated (i.e. mutated) at
// runtime by the respective application
exports.context = {
  uri: toBeDefined,
  locale: 'de'
}

function toBeDefined () {
  throw new Error('application context is not defined')
}
