exports.isNumber = function (numero){
    let tnumero = String(Number(numero)) == numero
    return tnumero
}

exports.isAlphaNum = function (letra){
    let resposta = true
    for (let car of letra){
        
        if (car.toUpperCase() == car.toLowerCase() && String(Number(car)) != car){
            resposta = false
            return resposta
            break
        }
    }
    return resposta
}

exports.isAlpha = function (letra){
    let resposta = true
    for (let car of String(letra)){
        if (car.toUpperCase() == car.toLowerCase()){
            resposta = false
            return resposta
            break
        }
    }
    return resposta
}

exports.isOperator = function (caract){
    let resposta = false
    if (caract.length == 1 && caract == '+' || caract == '-'|| caract == '*'|| caract == '/'|| caract == '^'|| caract == '('|| caract == ')' || caract == ',' ){
        resposta = true
    }
    return resposta
}

exports.isFloat = function (num){
    resp = false
    function temLetra(string){ 
        function isAlpha(letra){
            let resposta = true
            for (let car of letra){
                if (car.toUpperCase() == car.toLowerCase()){
                    resposta = false
                    return resposta
                    break
                }
            }
            return resposta
        }
        let teste = false
        for(let c of String(string)){
            if (isAlpha(c)){
                teste = true
            }
        }
        return teste
    }
    if (String(parseInt(num)).length  != String (num).length && !temLetra(num)){
        resp = true
        console.log(num)
    }
    return resp
}

exports.temLetra = function (string){ // se tem letra retorna true caso nao false
    function isAlpha(letra){
        let resposta = true
        for (let car of letra){
            if (car.toUpperCase() == car.toLowerCase()){
                resposta = false
                return resposta
                break
            }
        }
        return resposta
    }
    let teste = false
    for(let c of String(string)){
        if (isAlpha(c)){
            teste = true
        }
    }
    return teste
}

exports.temNum = function (str){
    bool = false
    for(let s of str){
        if (String(Number(s)) != 'NaN'){
            console.log('passou')
            bool= true
            break
        }
    }
    return bool
}
 
exports.addTagFilho = function (tag= '',tagPai='',id = '', valortxt='',value=''){ //html
    item = document.createElement(tag)
    item.id = id
    item.text = valortxt
    item.value = value
    tagPai.appendChild(item)}

exports.addSubgrupoSelect = function (tag = '' , tagPai='', id='' , label=''){ //html
    let item = document.createElement(tag)
    item.id = id
    item.label = label
    tagPai.appendChild(item)
} 

exports.semRepetir= function (array , organizar = false){ 
    //tira as repetiçoes do array , pode organizar colocando o segundo parammetro true
    let tempObjt = new Object
    let organiza = []
    if(organizar){
        for (i in array){
            tempObjt[array[i]] = i
        }
        organiza = [...Object.keys(tempObjt)]   
    }
    else{
        for (ind in array){
            tempObjt[array[ind]] = ind == 0? true : ind
        }
        for(i of array){
            for(t in tempObjt){
                if (i == t){
                    if(tempObjt[t] != false){
                        organiza.push(i)
                        tempObjt[t] = false
                    }
                }    
            }
        }
    }
    return organiza
}

exports.indexDe= function (array , item = false){
    // lista em um objeto os index dos itens encontrados no arrays , 
    //se item conter um parametro retorna um array com o index do item encontrado
    let tempObjt = new Object
        for (i in array){           
            if (array[i] in tempObjt){               
                tempObjt[array[i]].push(i)
            }
            else {
                tempObjt[array[i]] = [i]               
            }   
        }

    if (!item){
        return tempObjt
    }
    else{
        return tempObjt[item]
    }
}

exports.removerAcentos= function (string){ // Substitui algumas acentuações conhecidas
    let str = string
    const listaAcentos = {
        'a' :'áàâãä', 
        'e':'éèêë' , 
        'i':'íìîï',
        'o':'óòôõö',
        'u':'úùûü' , 
        'n':'ñ',
        'c':'ç',
        'y': 'ý'
    }
    for(l in listaAcentos){
        let la = listaAcentos[l]
        let ula = listaAcentos[l].toUpperCase()
        let mlb = l.toUpperCase()
        str = eval(`str.replace(/[${la}]/,"${l}")`)
        str = eval(`str.replace(/[${ula}]/,"${mlb}")`)
    }
    return str
}

//###### Math

exports.radians= function (num){
    return num * Math.PI / 180
}

exports.degrees= function  (num){
    return num * 180 / Math.PI
}

exports.sin = function (num){
    return Math.sin(num * Math.PI / 180)
}

exports.cos = function (num){
    return Math.cos(num * Math.PI / 180)
}

exports.tan = function (num){
    return Math.tan(num * Math.PI / 180)
}

exports.hypot = function (){ // recebe varios valores 
    let str = ''
    for (a in arguments){
        if (a == 0){
            str += ' Math.hypot('
        }
        if (a == arguments.length -1){
            str += String(arguments[a]) +')'
        }
        else{
        str += String (arguments[a]) +',' 
        } 
    }  
    return eval(str)
}
// Math.asin(num),etc retorna em radianos precisa converter para para (graus)degrees
exports.isin = function isin(num){
    return Math.asin(num) / (Math.PI / 180) //degrees
}

exports.icos = function (num){
    return Math.acos(num) / (Math.PI / 180) // degrees
}

exports.itan = function (num){
    return Math.atan(num) / (Math.PI / 180)// degrees
}
exports.sqrt = function (num){
    return Math.sqrt(num)
}

exports.pow = function (num1 , num2 = 2 ){
    return Math.pow(num1 ,num2)
}

