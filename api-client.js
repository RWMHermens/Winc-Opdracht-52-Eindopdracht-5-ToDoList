const apiUrl = "http://localhost:3000/";

async function postData() {
  const data = { description: input.value, done: false };
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postedData = await response.json();
    console.log(postedData);
    return postedData;
  } catch (err) {
    console.log(err);
  }
}

// postData();

async function getData() {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

// getData();
