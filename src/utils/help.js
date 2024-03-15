export function debounce(fn, wait) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...arguments)
    }, wait);
  }
}