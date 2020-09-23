let validar ={
    envio : evento =>{
        evento.preventDefault()

        let enviar = true
        let inputs = document.querySelectorAll('input')

        validar.limparErros()

        inputs.forEach( input =>{
            let checar = validar.checarInput(input)
            if(!checar[0]){
                validar.mostrarErro(input , checar[1])
                enviar = false
            } 
        })
        
        if (enviar){
            formulario.submit()
        }
    },

    checarInput : recebeInput =>{
        let input1 = recebeInput.getAttribute('regras')
        let bool = true
        let msg = ''
        if(input1 !== null){
            //console.log(recebeInput)
            let regras = recebeInput.getAttribute('regras').split('|')
            regras.forEach(regra =>{
                
                if (regra === 'obrigatorio'){
                    if (recebeInput.value ===  ''){               
                        //console.log('campo obg')
                        bool = false
                        msg = 'Campo obrigatório'
                        
                    }
                    
                }else if(regra.match(/min/) !== null){
                    let detalheRegra = regra.split('=')
                    if( recebeInput.value.length < detalheRegra[1]){
                        //console.log(`minimo ${detalheRegra[1]} caracteres`)
                        bool = false
                        msg = msg == '' ? `minimo ${detalheRegra[1]} caracteres` : msg
                    }
                    
                    
                }else if(regra === 'email'){
                    if(recebeInput.value !== ''){
                        let regex = /\S+@\S+\.\S+/
                        if(!regex.test(recebeInput.value.toLowerCase())){
                            bool = false
                            msg = 'Email inválido'
                        }
                        //console.log('email')
                    }
                    
                }
                
            })     
        }  
        return [bool,msg]
    },
    mostrarErro: (recebeInput , msgerro )=>{
        recebeInput.classList.add('erro')

        let elementoErro =  document.createElement('div')
        elementoErro.classList.add('errodiv')
        elementoErro.innerHTML = msgerro

        recebeInput.parentElement.insertBefore(elementoErro, recebeInput.elementSimbling) 
        // sobe um nivel com 'parentElement' e so insere antes com 'insertBefore' , so corrige com o 'elementSimbling' para pegar uma tag a frente mesmo q ela nao exista
    },
    limparErros: () =>{
        let inputsErro =  document.querySelectorAll('.erro')
        inputsErro.forEach(itens =>{
            itens.classList.remove('erro')
        })

        divErro = document.querySelectorAll('.errodiv')
        divErro.forEach(divError =>{
            divError.remove()
        })
        
    }
}

const formulario = document.querySelector('.validar')
formulario.addEventListener('submit' , validar.envio)


