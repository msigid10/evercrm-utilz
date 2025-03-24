import http from 'k6/http'
import { dataBulk } from './dataBulk.js'
import { sleep } from 'k6'

export const setup = () => {
    // Set the test duration in seconds (30 minutes in this example)
    // k6 run --duration 1800s script.js (execute for 30 minutes)
    const testDurationInSeconds = 30 * 60;
    return { testDurationInSeconds };
  }

//   const trackingResults = [];
//   console.log(trackingResults)

// Fungsi untuk mengonversi array ke format CSV
function convertArrayToCSV(data) {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).join(','));
    return `${header}\n${rows.join('\n')}`;
}

function saveToCSV(data, fileName) {
    const csvData = convertArrayToCSV(data);

    fs.writeFileSync(fileName, csvData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing CSV file:', err);
        } else {
            console.log('CSV file saved successfully!');
        }
    });
}

function tracking(data){
    const url = `http://everpro-logistic-client.prod.internal/logistic/v2/public/shipment/tracking/${data}`

    const payload = JSON.stringify({
        
    })

    const params = {
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        },
    }

    const response = http.get(url, payload, params)
    if(response.status !== 200){
        console.log(response.body)
    }

    return response
}

export default function() {
    const trackingResults = [];


    for(let i = 0; i < dataBulk.length; i++) {
        const result = tracking(dataBulk[i])
        console.log(i+1 + " " + dataBulk[i] + " " + JSON.parse(result.body).message)

        // Menyimpan hasil tracking ke dalam array
        trackingResults.push({
            TestNumber: i + 1,
            Data: dataBulk[i],
            Result: JSON.parse(result.body).message,
        });
        console.log(trackingResults)
        sleep(0.3)
    }

    // Menyimpan hasil tracking ke dalam file CSV
    const csvData = convertArrayToCSV(trackingResults);
    const convert = saveToCSV(csvData, './tracking_results.csv')
    console.log(convert);

}