/**
 * Creer Input element
 */
class Input {
  constructor(nodeFormField) {
    this._nodeFormField = nodeFormField
    this._nodeInput = this._nodeFormField.querySelector('input')
    this._isValid = false
    if (!this._nodeInput) {
      this._nodeInput = this._nodeFormField.querySelector('textarea')
    }
  }

  getNodeInput () {
    return this._nodeInput
  }

  getNodeForm () {
    return this._nodeFormField
  }

  isValid () {
    return this._isValid
  }

  checkInputChar (minChar) {
    const check = this._nodeInput.value.length >= minChar && this._nodeInput.validity.valid
    this._nodeFormField.dataset.errorVisible = !check
    this._isValid = check
    return this._isValid
  }
  
  checkEmail () {
    const check = this.checkInputChar(5) && this._nodeInput.validity.valid && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this._nodeInput.value)
    this._nodeFormField.dataset.errorVisible = !check
    this._isValid = check
    return this._isValid
  }
}

/**
 * create Form Element
 * @param {Node, [Input]}
 */
class Form {
  constructor(formNode, inputs) {
    this._formNode = formNode
    this._formdata = null
    this._xhr = this._getHttpRequest()
    this._inputs = inputs

    this._formNode.setAttribute('novalidate', true)
  }

  // Get FormNode
  getFormNode () {
    return this._formNode
  }

  /**
  * Construction d'une requete Ajax
  */
  _getHttpRequest () {
    let httpRequest = false
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest()
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType( 'text/plain' )
        }
    } else if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject( "Msxml2.XMLHTTP" )
        } catch (e) {
            try {
                httpRequest = new ActiveXObject( 'Microsoft.XMLHTTP' )
            } catch (e) {
            }
        }
    }

    if (!httpRequest) {
        throw new Error( 'Abandon : Impossible de creer une instance XMLHTTP' )
    }

    return httpRequest
  }

  /**
  * Requete XHR pour l'envoi de l'email en promesse
  * @return response
  */
  async sendEmail() {
    // défini le context et recupere les informations du formulaire
    const context = this
    context._formdata = new FormData(this._formNode)

    // construction de la promesse et envoi des données
    return new Promise (function (resolve, reject) {
      context._xhr.open( 'POST', context._formNode.getAttribute( 'action' ), true )
      context._xhr.setRequestHeader( 'X-Requested-With', 'xmlhttprequest' )

      context._xhr.onload = function () {     
        if (this.status >= 200 && this.status < 300) {
          resolve(JSON.parse(context._xhr.response))
        } else {
          reject({
            status: this.status,
            statusText: this._xhr.statusText
          })
        }
      }

      context._xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: context._xhr.statusText
        })
      }

      context._xhr.send( context._formdata )
    })
  }

  /**
   * Validation du formulaire
   */
  validForm () {
    let result = true

    this._inputs.forEach(input => {
      if (!input.isValid()) {
        result = false
      }
    })

    return result
  }
}

/**
 * Soumet le formulaire
 * @param {Event} event 
 */
function onSubmitCallback(token) {
  buttonSubmit.dataset.status = ''
  return new Promise(function (resolve, reject) {
    if (grecaptcha.getResponse()) {
      validateForm();
    }
    grecaptcha.reset()
  })
}

/**
 * Validation du formulaire en javascript
 */
async function validateForm () {
  // Check la validité des champs
  firstname.checkInputChar(3),
  lastname.checkInputChar(3),
  email.checkEmail(),
  subject.checkInputChar(4),
  message.checkInputChar(10)

  if (form.validForm()) {
    // Statut load elements
    buttonSubmit.dataset.status = 'load'
    form.getFormNode().classList.add('form--disabled')

    const request = await form.sendEmail()
    if (request.success) {
      // Status succes elements
      buttonSubmit.dataset.status = 'send'
    } else {
      // Status fail elements
      buttonSubmit.dataset.status = 'error'
      form.getFormNode().classList.remove('form--disabled')
    }
  }
}


