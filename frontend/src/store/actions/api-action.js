
import {AuthorizationStatus, APIRoute, AppRoute} from "../../utils/const";
import {saveCsrf, getCsrf, removeItem} from "../../utils/utils";
import {requireAuthorization, loadUser, getUserStatus, redirectToRoute, setCsrfToken, getRegistrationStatus, loadHistory} from "../actions/action";
import {toastr} from 'react-redux-toastr'



export const setActiveRule = (idTemplate, activeRule, setActive) => (dispatch, _getState, api) => (
  api.post(APIRoute.ACTIVE_RULE,{idTemplate, activeRule},{
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
         "Content-Type": "application/json",
         'X-CSRFTOKEN': getCsrf(),
     }
  }).then(({data}) => {
    toastr.success('Шаблон', data.message)
  }) .catch(({response}) => {
    toastr.error('Шаблон', response.data.message);
    setActive(!activeRule);
    throw Error(`Ошибка запуска`);
  })
);

export const removeRule = (idTemplate) => (dispatch, _getState, api) => (
  api.post(APIRoute.REMOVE_TEMPLATE,{idTemplate},{
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
         "Content-Type": "application/json",
         'X-CSRFTOKEN': getCsrf(),
     }
  }).then(({data}) => {
    dispatch(loadHistory(removeItem(_getState(),idTemplate)));
    toastr.success('Удаление шаблона', data.message)
  }) .catch(({response}) => {
    toastr.error('Удаление шаблона', response.message)
    throw Error(`Ошибка удаления шаблона`);
  })
);

export const saveRule = (templateData) => (dispatch, _getState, api) => (
  api.post(APIRoute.SAVE_TEMPLATE,JSON.parse(templateData),{
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
         "Content-Type": "application/json",
         'X-CSRFTOKEN': getCsrf(),
     }
  }).then(({data}) => {
    console.log(data);
    toastr.success('Изменения шаблона', data.message)
  }).catch(({data}) => {
    toastr.error('Изменения шаблона', data.message)
    throw Error(`Ошибка изменения шаблона`);
  })
);

export const fetchHistory = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HISTORY).then(({data}) => {
    dispatch(loadHistory(data));
  }) .catch(({response}) => {
    throw Error(`Ошибка загрузки истории`);
  })
);

export const createRule = (templateData) => (dispatch, _getState, api) => (
  api.post(APIRoute.ADD_TEMPLATE, JSON.parse(templateData),{
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
         "Content-Type": "application/json",
         'X-CSRFTOKEN': getCsrf(),
     }
  }).then(({data}) => {
    console.log(data);
    toastr.info('Создание шаблона', data.message)
  }).catch(({data}) => {
    toastr.error('Создание шаблона', data.message)
    throw Error(`Ошибка создания шаблона`);
  })
);



export const login = ({username, password}) => (dispatch, _getState, api) => (
    api.post(APIRoute.LOGIN, {username, password},{
      headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
           "Content-Type": "application/json",
           'X-CSRFTOKEN': getCsrf(),
       },
  },)
      .then(({data}) => {
        console.log(data);
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(loadUser(data));
        toastr.info('Авторизация', data.message)
      })
      .then(() => dispatch(redirectToRoute(AppRoute.RULE)))
      .catch(({response}) => {
        console.log(response);
        dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
        toastr.error('Авторизация', response.data.message)
        throw Error(`Ошибка авторизации`);
      })
  );

  export const checkAuth = () => (dispatch, _getState, api) => (
    api.get('/getsession').then(({data}) => {
      if (data.login == true) {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(redirectToRoute(AppRoute.RULE))
        dispatch(loadUser(data));
      } else {
        dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
        api.get('/getcsrf').then((res) => {
          //dispatch(setCsrfToken(res.headers["x-csrftoken"]))
          saveCsrf(res.headers["x-csrftoken"]);
          console.log(res.headers["x-csrftoken"]);
        }).catch((err) => {
          //console.log(err);
        });
      }
    })
      .catch(() => {
        dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
     })
  );

  export const credential = (registrData) => (dispatch, _getState, api) => (
    api.post(APIRoute.CREDENTIAL, JSON.parse(registrData),{
      headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
           "Content-Type": "application/json",
           'X-CSRFTOKEN': getCsrf(),
       },
    },)
      .then(({data}) => {
        dispatch(getRegistrationStatus(data));
      })
      .catch(({response}) => {
        throw Error(`Ошибка регистрации`);
      })
  );

  export const logout = (registrData) => (dispatch, _getState, api) => (
    api.get(APIRoute.LOGOUT,{
      headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
           "Content-Type": "application/json",
           'X-CSRFTOKEN': getCsrf(_getState()),
       },
  })
      .then(({data}) => {
        dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
        window.location.href = '/';
      })
      .then(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
      .catch(({response}) => {
        dispatch(getUserStatus(response));
        throw Error(`Ошибка выхода`);
      })
  );

