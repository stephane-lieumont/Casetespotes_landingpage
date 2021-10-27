document.querySelector('body').classList.add('loading')
document.onreadystatechange = function () {
  if(document.readyState == "complete") {
    document.querySelector('body').classList.remove('loading')
    document.querySelector('body').classList.add('load')
  }
}