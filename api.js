export const baseURL = 'https://ka-zkkx.onrender.com';


const fetchApi = async (link, method, body) => {
  const url = baseURL + link;

  return await fetch(url, {
    method: method || 'GET',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(body),
  }).then(res => res.json())
  .catch(e => console.log("fetch error: ", e));
};
export const AdditionalUserInfo = en => {
  return fetchApi('/app');

  console.log(fetchApi);
};

export const apiLogin = async (email, password) => {
  const link = '/Login';
  return await fetchApi(link, 'POST', {email: email, pass: pass}).then(
    res => res,
  );
};

export const apiRegister = async (email, password) => {
  const link = '/Register';
  body = {
    email: email.toLowerCase(),
    password: password,
  };
  return await fetchApi(link, 'POST', body);
};
