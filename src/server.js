import { createServer, Model } from 'miragejs'

export function makeApi ({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      period: Model
    },

    seeds (server) {
      server.create('period', { from: 10, to: 15 })
      server.create('period', { from: 20, to: 25 })
    },

    routes () {
      this.namespace = 'api'

      this.get('/periods', (schema) => {
        return schema.periods.all()
      })
    }
  })

  return server
}
