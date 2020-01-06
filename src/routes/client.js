export default {
  ends : {
    root     : () => `/`,
    home     : () => `/home`,
    signup   : () => `/auth/sign-up`,
    signin   : () => `/auth/sign-in`,
    signout  : () => `/auth/sign-out`,
    users    : (id) => `/users/${id}`,
    graphs   : (id) => `/graphs/${id}`,
  },
}
