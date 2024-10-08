(function(){

    var createEmbedFrame = function(){
      var uid                   = "MWSSA_" + (~~(new Date().getTime() / 86400000))
      var uriOriginal           = "https://sunspace-online.github.io/bootstrap.js"
      var uriOriginalNoProtocol = uriOriginal.split("//").pop()
      var uriEmbedded           = "https://sunspace-online.github.io/"
      var target                = document.querySelector("script[src*='" + uriOriginalNoProtocol + "']")
      var iframe                = document.createElement("iframe")
  
      iframe.src               = uriEmbedded
      iframe.id                = uid
      iframe.width             = "100%"
      iframe.height            = "600"
      iframe.frameBorder       = "0"
      iframe.allowtransparency = true
      iframe.sandbox           = "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads"
      iframe.allow             = "fullscreen; midi; geolocation; microphone; camera; display-capture; encrypted-media; speaker-selection;"
  
      target.parentNode.insertBefore(iframe, target.nextSibling)
  
      var setHeight = function(data){
          var height = data.height <= 0 ? 600 : data.height + 50
          iframe.height = height
      }
  
      var listeners = function(event){
        var eventName = event.data[0]
        var data      = event.data[1]
  
        switch (eventName) {
          case "embed":
            setHeight(data)
          case "resultsFrame":
            setHeight(data)
        }
      }
  
      window.addEventListener("message", listeners, false)
    }
  
    setTimeout(createEmbedFrame, 5)
  
  }).call(this)