import axios from 'axios'

import { server } from 'routes'
import user from './user'

const authios = () => {
  return axios.create ({
    baseURL : server.base,
    headers : {
      Authorization : user.token.get (),
    },
  })
}

export default authios
