const FETCH_TIMEOUT = 10 * 1000;

export let DOMAINS = 'https://api.coingecko.com/api/v3/';

const parseJsonString = (jsonStr) => {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    return jsonStr;
  }
};

const parseResponse = (response) => {
  return new Promise((resolve, reject) => {
    const { status: statusCode, ok: responseOk } = response;
    response
      .text()
      .then((str) => {
        const result = parseJsonString(str);
        const ok = responseOk && statusCode >= 200 && statusCode < 300;

        if (!ok) throw result;

        return resolve({
          ok,
          status: statusCode,
          result,
        });
      })
      .catch(reject);
  });
};

const defaultFetch = (route, requestBody) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(function () {
      const timeoutError = new Error('Internet error, please try again later!');
      timeoutError.status = 408;
      reject(timeoutError);
    }, FETCH_TIMEOUT);
    fetch(`${DOMAINS}${route}`, requestBody)
      .then(parseResponse)
      .then((result) => {
        clearTimeout(timeout);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timeout);
        reject(error);
      });
  });
};

export default defaultFetch;
