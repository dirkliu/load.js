function loadStyle (styleText) {
  var style = document.createElement('style')
  style.type="text/css"
  style.appendChild(document.createTextNode(styleText))
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
}
