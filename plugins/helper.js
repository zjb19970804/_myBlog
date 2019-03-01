const { error } = console

export default ({ app }, inject) => {
  inject('tryCatch', (successFn) => {
    try {
      successFn()
    } catch (e) {
      error(e)
    }
  })
}
