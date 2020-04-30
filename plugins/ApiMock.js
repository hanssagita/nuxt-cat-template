import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import ApiRoutes from '@/api-mock/routes'

const routes = ApiRoutes

const methodMap = {
  GET: 'onGet',
  PUT: 'onPut',
  POST: 'onPost',
  DELETE: 'onDelete'
}

const mock = new MockAdapter(axios)

const applyMock = function(routes) {
  routes.forEach((route) => {
    mock[methodMap[route.method]](route.url).reply(
      route.code || 200,
      route.response
    )
  })
}

applyMock(routes)
