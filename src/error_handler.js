module.exports = {
    handler: err =>
    setImmediate(() => {
      throw err
    })
}