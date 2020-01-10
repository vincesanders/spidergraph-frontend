export default {
  base : 'https://cors-anywhere.herokuapp.com/https://lambda-spider.herokuapp.com/api',
  ends : {
    signup : {
      POST : () => `/auth/register`,
    },
    signin : {
      POST : () => `/auth/login`,
    },
    signout : {
      POST : () => `/auth/logout`,
    },
    users : {
      GET : () => `/users`,
    },
    user : {
      GET : (id) => `/users/${id}`,
    },
    user_graphs : {
      GET : (id) => `/users/${id}/graphs`,
    },
    graphs : {
      GET : (id) => `/graphs`,
    },
    graph : {
      GET : (id) => `/graphs/${id}`,
      POST : () => `/graphs`,
      PUT : (id) => `/graphs/${id}`,
      DELETE : (id) => `/graphs/${id}`,
    },
  },
}
