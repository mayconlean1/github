var resp = document.getElementById('resp')

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

function verificar(sel){//sel.selectedIndex #seleciona index do select , sel.options #lista os itens do select em um array
    let select = document.getElementById('csel')
    let divinput = document.getElementById('inputs')
    let opcao = sel.options[sel.selectedIndex].value
    if(opcao == 'data'){
        divinput.innerHTML =    `<p>Data Inicio <input type="date" name="tddatai" id="cddatai" > <input type="number" name="tdia" id="cdia" placeholder="quantos dias?" size="10" min="0"> dias</p>
        <p>Contagem <input type="button" value="Voltando" onclick="contar('volta')">  <input type="button" value="Avançando" onclick="contar('avanca')"></p>`
    }
    else{
        
        divinput.innerHTML =    `<p>Inicio <input type="date" name="tdatai" id="cdatai"> Final <input type="date" name="tdataf" id="cdataf"></p>
                                <p><input type="button" value="Ok!" id="btn" onclick="data()"></p>`
        txtdata1 = document.getElementById('cdatai')
        txtdata2 = document.getElementById('cdataf')
    }
 
}

function contar(direcao){
    let txtdata = document.getElementById('cddatai')
    let txtdia = document.getElementById('cdia')

    let hoje = new Date
    let hojeDia = hoje.getDate() < 10 ? '0'+ String (hoje.getDate()) : String (hoje.getDate())
    let hojeMes = hoje.getMonth() < 10 ? '0' + String(hoje.getMonth()+1) : String(hoje.getMonth()+1)
    let hojeAno = String(hoje.getFullYear()) 
    let hojeData = hojeAno +'-'+ hojeMes +'-'+ hojeDia

    let opcao = direcao
    
    let data = txtdata.value == '' ? hojeData : txtdata.value
    let dias = txtdia.value < 0 ? txtdia.value * -1 : txtdia.value

    let bckpdias = dias
    let dataDia = nSData(data,'dia')
    let dataMes = nSData(data,'mes')
    let dataAno = nSData(data,'ano')
    
    let pdia = dataDia  
    let pmes = dataMes
    let pano = dataAno
    let pindex = dataMes
    
    while(dias != 0){
        diaMes['02'] = pano % 4 == 0? 29 : 28
    
        pindex = Number(pindex) < 10 ? '0' + String(Number(pindex)) : String(Number (pindex))
    
        pdia = opcao == 'avanca'? pdia + 1 : pdia -1
        dias--
        
        if (pdia == diaMes[pindex] && dias >= 0 && opcao == 'avanca'){
            if (dias == 0){
                pdia = diaMes[pindex]
            }
            else{
                pdia = 0
                pindex = opcao == 'avanca'? String(Number(pindex)+1) :String(Number(pindex)-1)
                pmes = opcao == 'avanca'? pmes + 1 : pmes -1
            }
            if (pmes == 13){
                pmes = 1
                pindex = '01'
                pano++
                
            }
            
        }
        else if (pdia == 1 && opcao != 'avanca' && dias > 0){
            pindex = opcao == 'avanca'? String(Number(pindex)+1) :String(Number(pindex)-1)
            pindex = pindex == 0? '01' : pindex
            pindex = Number(pindex) < 10 ? '0' + String(Number(pindex)) : String(Number (pindex))
            pmes = opcao == 'avanca'? pmes + 1 : pmes -1
            pdia = pdia == 1 ? diaMes[pindex]+1 : diaMes[pindex] 
            if (pmes == 0){
                pmes = 12
                pindex = '12'
                pano--
                
            }
    
        }
    }
    
    pdia = pdia < 10 ? '0'+ String(pdia) : String(pdia)
    pmes = pmes < 10 ? '0' + String(pmes) : String(pmes)
    pano = pano < 10 ? '0' + String(pano) : String(pano)
    let dataAlvo = `${pdia}-${pmes}-${pano}`
    
    console.log(dataAlvo)
    resp.innerHTML = dataAlvo
    if (opcao == 'avanca'){
        
    }
    else{
        
    }
}

function data(){
    let txtdata1 = document.getElementById('cdatai')
    let txtdata2 = document.getElementById('cdataf')

    let hoje = new Date
    let hojeDia = hoje.getDate() < 10 ? '0'+ String (hoje.getDate()) : String (hoje.getDate())
    let hojeMes = hoje.getMonth() < 10 ? '0' + String(hoje.getMonth()+1) : String(hoje.getMonth()+1)
    let hojeAno = String(hoje.getFullYear()) 
    let hojeData = hojeAno +'-'+ hojeMes +'-'+ hojeDia 

    if (txtdata1.value == '' || txtdata2.value == ''){
        alert ('Não foi preenchido todos os valores! Será considerado a data atual do sistema')
    }
    
    let data1 = txtdata1.value == '' ? hojeData : txtdata1.value
    let data2 = txtdata2.value == '' ? hojeData : txtdata2.value

    let menorData = data1 <= data2 ? data1 : data2
    let menorDataDia = nSData(menorData,'dia')
    let menorDataMes = nSData(menorData, 'mes')
    let menorDataAno = nSData(menorData,'ano')
    
    let maiorData = data1 >= data2 ? data1 : data2
    let maiorDataDia = nSData(maiorData,'dia')
    let maiorDataMes = nSData(maiorData,'mes')
    let maiorDataAno = nSData(maiorData,'ano')
    
    let dias = 0
    
    let process = true
    while (true){
        diaMes['02'] = menorDataAno % 4 == 0 ? '29' : '28'
        let diaMesIndex = menorDataMes < 10 ? '0' + String(menorDataMes) : String(menorDataMes)
        
        if(menorDataDia != diaMes[diaMesIndex]){
            if (menorDataDia == maiorDataDia && menorDataMes == maiorDataMes && menorDataAno == maiorDataAno){
                
                break
            }
            else{
                menorDataDia++
                dias ++
                
                if(menorDataDia == diaMes[diaMesIndex]){
                    if(menorDataDia == maiorDataDia && menorDataMes == maiorDataMes && menorDataAno == maiorDataAno ){
                        break
                    }
                    menorDataDia = 0
                    if (menorDataMes <= maiorDataMes){
                        if (menorDataMes < 12){
                            menorDataMes ++
                            
                        }
                        else{
                            menorDataMes = 1
                            if (menorDataAno < maiorDataAno){
                                menorDataAno++
                                
                            }
                            else{
                                break
                                
                            }
                        }
                    }
                    else if (menorDataAno < maiorDataAno){
                        if (menorDataMes < 12){
                            menorDataMes ++
                            
                        }
                        else{
                            menorDataMes = 1
                            if (menorDataAno < maiorDataAno){
                                menorDataAno++
                                
                            }
                            else{
                                break
                                
                            }
                        }
                    }    
                    else{
                        
                        break
                    }
                    
                }
            }
        }
        else{
            menorDataDia = 1
            dias ++
            menorDataMes ++
            console.log('final')
        }
    }
    
    if (data1 > data2){
        console.log('inverso')
        resp.innerHTML = `Se passaram ${dias} dias`
        
    }
    else if (data1 == data2){
        console.log('datas iguais')
        resp.innerHTML = `Nenhum dia de diferença`
    }
    else{
        resp.innerHTML = `Falta ${dias} dias`
        
    }
    
    console.log(dias)
 
}



