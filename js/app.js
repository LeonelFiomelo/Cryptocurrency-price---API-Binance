let endpoint = 'https://api.binance.com/api/v3/ticker/price';

fetch(endpoint)
    .then(response => response.json())
    .then(dataJson => showData(dataJson))
    .catch(e => console.log(e))

const showData = (dataJson) => {
    console.log(dataJson);
    let body = '';
    for(let i=0; i<dataJson.length; i++){
        body += `<tr>
                    <td class='table__item table__item--body'>${dataJson[i].symbol}</td>
                    <td class='table__item table__item--body'>${dataJson[i].price} USD</td>
                </tr>`;
    }
    document.getElementById('table__body').innerHTML=body
}