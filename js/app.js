const getData1 = async(simbolo,moneda) =>{
    
  const endpoint = `https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=${moneda}&format=JSON&tickers=${simbolo}&key=ckey_21be25f5c33d41c58c22cf020ab`
  
  const resp = await fetch(endpoint)
  const json = await resp.json()
  datos = json.data.items

  if(datos.length>0) {
  const tabla = document.getElementById('tabla') 
  let row = document.createElement('tr');
  let row_data_1 = document.createElement('td');
  let row_data_2 = document.createElement('td');
  let row_data_3 = document.createElement('td');
  let row_data_4 = document.createElement('td');
  const datosTabla = datos.map(data =>
      {
        row_data_1.innerHTML = `<img src=${data.logo_url} height="30">`
        row_data_2.innerHTML = data.contract_ticker_symbol
        row_data_3.innerHTML = data.contract_name
        row_data_4.innerHTML = `${data.quote_rate} ${moneda}`
      }
    )
  row.appendChild(row_data_1);
  row.appendChild(row_data_2);
  row.appendChild(row_data_3);
  row.appendChild(row_data_4);
  tabla.appendChild(row);
    }
    else{window.alert('No Existe el Símbolo en API Covalent')}
}

function agregar(){
let i=crypto_mendas.length
if (document.getElementById('simboloCripto').value.trim() !=""){
crypto_mendas[i]=document.getElementById('simboloCripto').value
document.getElementById('simboloCripto').value = ''
let moneda='USD'
if (document.formulario.options[0].checked){
moneda='USD'
}
else {  
if(document.formulario.options[1].checked){
    moneda='ARS'
}
else{ moneda='EUR'}
}
monedas[i]=moneda
getData1(crypto_mendas[i], monedas[i])
}}

function refrescar(){
const elemento = document.querySelector("#tabla")
elemento.innerHTML = ""
llenar()
}

function limpiar(){
  const elemento = document.querySelector("#tabla")
  elemento.innerHTML = ""
  crypto_mendas.length = 0
  monedas.length = 0
}

let datos
const crypto_mendas = ['btc','eth','usdt', 'usdc']
const monedas = ['USD', 'USD', 'USD', 'USD' ]
llenar()

function llenar()
{
for(let i=0;i < crypto_mendas.length;i++)
{
  getData1(crypto_mendas[i],monedas[i])
}
}

const calculate = async(simbolo) =>{
    
  const resp = await fetch(`https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=${simbolo}&key=ckey_5b6fbe329c714404ae706e3d444`)
  const json = await resp.json()

  let precio = 0 

  const valorBuscado = (json.data.items).map(valor => precio = valor.quote_rate)

  return precio
 
}

const calcular = async() =>{
  const tokenUno = document.getElementById('token-1')
  const tokenDos = document.getElementById('token-2')
  const cantidadUno = document.getElementById('cantidad-1')
  const cantidadDos = document.getElementById('cantidad-2')
  const cambio = document.getElementById('cambio')
  const taza = document.getElementById('taza')

  const token1 = tokenUno.value
  const token2 = tokenDos.value

  let dividendo = 0
  dividendo = await calculate(token1)
  let divisor = 0
  divisor = await calculate(token2)

  let resultado = (dividendo/divisor) * cantidadUno.value

  cantidadDos.setAttribute("value", resultado);

}



