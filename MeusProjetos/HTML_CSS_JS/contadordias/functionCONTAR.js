function nSData(data , anoMesDia , numStr = 'num' ){
    let datat = data
    if (anoMesDia == 'ano'){
        datat = data.substring(0,4)
    }
    else if (anoMesDia == 'mes'){
        datat = data.substring(5,7)
    }
    else if (anoMesDia == 'dia'){
        datat = data.substring(8)
    }
    if(numStr == 'num'){
        datat = Number(datat)
    }
    return datat
}
var diaMes = {
    '01' : 31,
    '02' : 28,
    '03' : 31,
    '04' : 30,
    '05' : 31,
    '06' : 30,
    '07' : 31,
    '08' : 31,
    '09' : 30,
    '10' : 31,
    '11' : 30,
    '12' : 31
}

//Acima funcoes globais

let opcao = 'avanca'

let data = '2020-08-26'
let dias = Number( '7')
let bckpdias = dias
let dataDia = nSData(data,'dia')
let dataMes = nSData(data,'mes')
let dataAno = nSData(data,'ano')

let pdia = dataDia  
let pmes = dataMes
let pano = dataAno
let pindex = dataMes

/*
pindex = pindex < 10 ? '0' + String(pindex) : String(pindex)
pdia = opcao == 'avanca'? pdia + 1 : pdia -1
pmes = opcao == 'avanca'? pmes + 1 : pmes -1
pano = opcao == 'avanca'? pano + 1 : pano -1
pindex = opcao == 'avanca'? String(Number(pindex)+1) :String(Number(pindex)-1)
*/

while(dias != 0){
    diaMes['02'] = pano % 4 == 0? 29 : 28

    pindex = Number(pindex) < 10 ? '0' + String(Number(pindex)) : String(Number (pindex))

    console.log(diaMes[pindex], 'DEBUG 0' , dias)

    pdia = opcao == 'avanca'? pdia + 1 : pdia -1
    dias--
    console.log(pdia , 'DEBUG 1')

    if (pdia == diaMes[pindex] && dias >= 0 && opcao == 'avanca'){
        console.log(dias)
        if (dias == 0){
            pdia = diaMes[pindex]
        }
        else{
            pdia = 0
            pindex = opcao == 'avanca'? String(Number(pindex)+1) :String(Number(pindex)-1)
            pmes = opcao == 'avanca'? pmes + 1 : pmes -1
        }
        console.log(pdia , 'DEBUG 2')
        if (pmes == 13){
            pmes = 1
            pindex = '01'
            pano++
            console.log(pdia , 'DEBUG 3')
        }
        
    }
    else if (pdia == 1 && opcao != 'avanca' && dias > 0){
        console.log(dias , pdia , pmes)
        
        pindex = opcao == 'avanca'? String(Number(pindex)+1) :String(Number(pindex)-1)
        pindex = pindex == 0? '01' : pindex
        pindex = Number(pindex) < 10 ? '0' + String(Number(pindex)) : String(Number (pindex))
        pmes = opcao == 'avanca'? pmes + 1 : pmes -1
        pdia = pdia == 1 ? diaMes[pindex]+1 : diaMes[pindex]  
        console.log(pdia , pindex , 'DEBUG 4')
        if (pmes == 0){
            pmes = 12
            pindex = '12'
            pano--
            console.log(pdia , 'DEBUG 3')
        }

    }
}

pdia = pdia < 10 ? '0'+ String(pdia) : String(pdia)
pmes = pmes < 10 ? '0' + String(pmes) : String(pmes)
pano = pano < 10 ? '0' + String(pano) : String(pano)
let dataAlvo = `${pdia}-${pmes}-${pano}`

console.log(dataDia , dataMes , dataAno)
console.log(pdia , pmes , pano, pindex)

console.log(dataAlvo)
