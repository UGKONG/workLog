export const $useGet = (url = '', callback) => {
  let data = [];
  fetch(url).then(res => {
    if (res.status !== 200) {
      console.error(`${url} Server Error`);
      return;
    }
    return res.json();
  }).then(resData => {
    data = resData ?? [];
    callback({data: data});
  });
}

export const $usePost = (url = '', newData, callback) => {
  let data = [];
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newData)
  }).then(res => {
    if (res.status !== 200) {
      console.error(`${url} Server Error`);
      return;
    }
    return res.json();
  }).then(() => {
    data = newData;
    callback({data: data});
  })
}

export const $usePut = (url = '', newData, callback) => {
  let data = [];
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(newData)
  }).then(res => {
    if (res.status !== 200) {
      console.error(`${url} Server Error`);
      return;
    }
    return res.json();
  }).then(() => {
    data = newData;
    callback({data: data});
  })
}

export const $useDelete = (url = '', callback) => {
  fetch(url, {
    method: 'DELETE'
  }).then(res => {
    if (res.status !== 200) {
      console.error(`${url} Server Error`);
      return;
    }
    return res.json();
  }).then(() => {
    callback();
  })
}