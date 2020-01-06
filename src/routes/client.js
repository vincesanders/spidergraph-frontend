export default {
  ends : {
    root     : () => `/`,
    home     : () => `/home`,
    signup   : () => `/auth/sign-up`,
    signin   : () => `/auth/sign-in`,
    signout  : () => `/auth/sign-out`,
    users    : () => `/users`,
    user     : (id) => `/users/${id}`,
    graphs   : () => `/graphs`,
    graph    : (id) => `/graphs/${id}`,
  },
}
