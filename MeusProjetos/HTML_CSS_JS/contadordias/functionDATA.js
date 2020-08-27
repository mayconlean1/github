
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
let diaMes = {
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
let hoje = new Date
let hojeDia = hoje.getDate() < 10 ? '0'+ String (hoje.getDate()) : String (hoje.getDate())
let hojeMes = hoje.getMonth() < 10 ? '0' + String(hoje.getMonth()+1) : String(hoje.getMonth()+1)
let hojeAno = String(hoje.getFullYear()) 
let hojeData = hojeAno +'-'+ hojeMes +'-'+ hojeDia

let data1 = '2020-08-06'
let data2 = '2020-12-31'
/*let data1 = txtdata1.value == '' ? hojeData : txtdata1.value
let data2 = txtdata2.value == '' ? hojeData : txtdata2.value*/

let menorData = data1 <= data2 ? data1 : data2
let menorDataDia = nSData(menorData,'dia')
let menorDataMes = nSData(menorData, 'mes')
let menorDataAno = nSData(menorData,'ano')

let maiorData = data1 >= data2 ? data1 : data2
let maiorDataDia = nSData(maiorData,'dia')
let maiorDataMes = nSData(maiorData,'mes')
let maiorDataAno = nSData(maiorData,'ano')

let dias = 0
if (data1 > data2){
    console.log('inverso')
}
else if (data1 == data2){
    console.log('datas iguais')
}


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
            console.log(menorDataDia , diaMes[diaMesIndex] )
            if(menorDataDia == diaMes[diaMesIndex]){
                if(menorDataDia == maiorDataDia && menorDataMes == maiorDataMes && menorDataAno == maiorDataAno ){
                    console.log('teste0.1')
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

console.log(dias)




