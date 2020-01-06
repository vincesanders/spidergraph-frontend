export default {
  base : 'https://example.com/api',
  ends : {
    signup : {
      POST : () => `/auth/register`,
    },
    signin : {
      POST : () => `/auth/login`,
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
      GET : (id) => `/graphs/${id}`,
      POST : () => `/graphs`,
      PUT : (id) => `/graphs/${id}`,
      DELETE : (id) => `/graphs/${id}`,
    },
  },
};
