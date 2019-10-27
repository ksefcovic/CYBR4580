export const httpMiddleware = store => next => action => {
    if (action[HTTP_ACTION]) {
      const actionInfo = action[HTTP_ACTION];
      const fetchOptions = {
        method: actionInfo.verb,
        headers: actionInfo.headers,
        body: actionInfo.payload || null
      };
      
      next({
        type: actionInfo.type + "_REQUESTED"
      });
      
      fetch(actionInfo.endpoint, fetchOptions)
        .then(response => response.json())
        .then(data => next({
          type: actionInfo.type + "_RECEIVED",
          payload: data
        }))
        .catch(error => next({
          type: actionInfo.type + "_FAILED",
          payload: error
       }));
    } else {
      return next(action);
    }
  }
  