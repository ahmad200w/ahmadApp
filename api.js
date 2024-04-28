export const baseURL = 'http://localhost:7800';

//https://ka-zkkx.onrender.com

const fetchApi = async (link, method, body) => {
  const url = baseURL + link;

  return await fetch(url, {
    method: method || 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(e => console.log('fetch error: ', e));
};
export const AdditionalUserInfo = en => {
  return fetchApi('/app');

  console.log(fetchApi);
};

export const apiLogin = async (user, email, password) => {
  const link = '/Login';
  try {
    const response = await fetchApi(link, 'POST', {
      userName: user,
      email: email,
      password: password,
    });
    return response;
  } catch (err) {
    console.log('error', err);
  }

  //.then(
  //res => res,
  // );
};

export const apiRegister = async (userName, email, password) => {
  const link = '/Register';
  body = {
    userName: userName,
    email: email.toLowerCase(),
    password: password,
  };
  return await fetchApi(link, 'POST', body);
};
