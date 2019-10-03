import createStore from 'unistore';
import { Call, EventEmitter } from 'basic-helper';

import * as AUTH_APIS from './apis';

const defaultAuthStore = {
  userInfo: {},
  username: 'none',
  loginResDesc: '',
  logging: false,
  logouting: false,
  isLogin: false,
  sessID: 'none',
};
const authStore = createStore(defaultAuthStore);

function onLoginSuccess(store, resData) {
  const userInfo = resData;
  const username = resData.username;
  userInfo.username = username;
  // let menuStore = (userInfo.Menus || {}).Child;
  const sessID = resData.SessId;
  // delete userInfo['Menus'];

  store.setState({
    logging: false,
    isLogin: true,
    sessID,
    username,
    userInfo,
    // menuStore
  });

  EventEmitter.emit('LOGIN_SUCCESS', { userInfo });
  sessionStorage.setItem('PREV_LOGIN_DATA', JSON.stringify(resData));
}

function clearPrevLoginData() {
  sessionStorage.clear();
}

function getPrevLoginData() {
  const res = sessionStorage.getItem('PREV_LOGIN_DATA');
  let result = null;
  if (res) {
    try {
      result = JSON.parse(res);
    } catch (e) {
      console.log(e);
    }
  }
  return result;
}

const authActions = store => ({
  async autoLogin() {
    const prevLoginData = getPrevLoginData();
    if (prevLoginData) {
      onLoginSuccess(store, prevLoginData);
    }
  },
  async login(state, form, callback) {
    store.setState({
      logging: true
    });
    const loginRes = await AUTH_APIS.login(form);
    const isLogin = loginRes.code == 0;
    if (isLogin) {
      Call(callback, form);
      onLoginSuccess(store, form);
    } else {
      store.setState({
        logging: false,
        loginResDesc: loginRes.message
      });
    }
  },
  async logout() {
    store.setState({
      logouting: true,
    });
    await AUTH_APIS.logout();
    store.setState(defaultAuthStore);
    clearPrevLoginData();
  },
});

export {
  authStore, authActions
};
