const $useArray = (obj = {}) => {
    let _arr = [];
    let _temp = Object.entries(obj);
    if (!_temp) return [];
    _temp.forEach((data) => {
      _arr.push(data[1]);
    });
    return _arr;
}

export default $useArray;