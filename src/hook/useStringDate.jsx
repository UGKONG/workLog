const $useStringDate = (date) => {
  let Y = String(date.getFullYear());
  let M = String(date.getMonth()).length === 1 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1);
  let D = String(date.getDate()).length === 1 ? '0' + String(date.getDate()) : String(date.getDate());
  let h = String(date.getHours()).length === 1 ? '0' + String(date.getHours()) : String(date.getHours());
  let m = String(date.getMinutes()).length === 1 ? '0' + String(date.getMinutes()) : String(date.getMinutes());
  let s = String(date.getSeconds()).length === 1 ? '0' + String(date.getSeconds()) : String(date.getSeconds());
  return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}

export default $useStringDate;