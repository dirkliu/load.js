function loadScript(src, callback, options) {   
  var script = document.createElement('script'), body = document.getElementsByTagName('body')[0]
  if (options) {
    for (var key in options) {
      script.setAttribute(key, options[key])
    }
  }
  script.src = src
  if (script.addEventListener) {
    script.addEventListener('load', function () {
        console.log('loaded:', testInfo)
        callback()
    }, false)
  } else if (script.attachEvent) {  
    script.attachEvent('onreadystatechange', 
      function () {       
        var target = window.event.srcElement       
        if (target.readyState == 'loaded') {
          callback()
        }
      })
  }
  body.appendChild(script)
}

function addStyle (styleText) {
  var style = document.createElement('style')
  style.type="text/css"
  style.appendChild(document.createTextNode(styleText))
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
}
