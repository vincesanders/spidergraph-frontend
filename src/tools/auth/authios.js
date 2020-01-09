import axios from 'axios'

import { server } from 'routes'
import user from './user'

const authios = () => {
  console.log ('>>> authios : it\'s happening! <<<')

  return axios.create ({
    baseURL : server.base,
    headers : {
      token : user.token.get (),
    },
  })
}

export default authios
