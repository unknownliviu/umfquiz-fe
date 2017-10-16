import isFunction from 'lodash/fp/isFunction'

export const Types = {
  UserLogin: 'USER_LOGIN',
  UserLogout: 'USER_LOGOUT'
}

export const Actions = {
  userLogin: payload => ({
    type: Types.UserLogin,
    payload
  }),
  userLogout: payload => ({
    type: Types.UserLogout,
    payload
  })
}

const INITIAL_STATE = {
  name: null,
  token: null,
  email: null,
  loggedIn: false
}

const userLogin = (state, {name, token, email}) => ({
  ...state,
  name,
  token,
  email,
  loggedIn: true
})

const userLogout = state => ({
  loggedIn: false
})

const reducerMap = {
  [Types.UserLogin]: userLogin,
  [Types.UserLogout]: userLogout
}

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = reducerMap[action.type]
  return isFunction(handler) ? handler(state, action.payload) : state
}
