const databaseURL = './api/v1/attendance';

export function getData() {
  const requestData = new Promise(async (res, rej) => {
    try {
      const response = await fetch(databaseURL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = response.json();
      ////console.log(data);
      res(data);
    } catch (error) {
      rej(error);
    }
  });
  return requestData;
}
