const fs = require('fs');
const csv = require('csv-parser');
const needle = require('needle');
const urlDatabase =
  'https://docs.google.com/spreadsheets/d/1gnjt-bU31ZbAc9wa5b57nI-_Gfnv3ac6sD9JPOQHCHs/gviz/tq?tqx=out:csv&sheet=answerKey1';
const database = './src/db/data.csv';
let online = true;

export function getConnectionState() {
  return window.navigator.onLine;
}

export async function getDatabase() {
  if (online) {
    console.log('Trying Online Database.');
    return new Promise((resolve, reject) => {
      let answerKeyRaw = [];
      needle
        .get(urlDatabase)
        .pipe(csv({ headers: false }))
        .on('data', (data) => {
          answerKeyRaw.push(data);
        })
        .on('done', (err) => {
          if (err)
            reject(
              new Error(
                'An error has occurred when retrieving online database.'
              )
            );
          else resolve(answerKeyRaw);
        })
        .on('end', function () {
          console.log('Online Database Success');
        });
    });
  } else {
    console.log('Unable to Connect.');
  }
}
