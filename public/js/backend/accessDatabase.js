const databaseURL = './api/v1/attendance';
/*
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
*/
export async function getData2() {
  try {
    const response = await fetch(databaseURL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(error.message);
  }
}

export function getData() {
  const requestData = new Promise(async (res, rej) => {
    try {
      const response = await fetch(databaseURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = response.json();
      //console.log(data);
      res(data);
    } catch (error) {
      rej(error);
    }
  });
  return requestData;
}