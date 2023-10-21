import React, { useState } from "react";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState([]);

  const [orderItem, setOrderItem] = useState("Mutton biriyani");
  const getApiData = () => {
    // backend people willlp provide  the google api
    axios
      .get("https://fakestoreapi.com/products")
      .then((resData) => resData.data) /// res callback function
      .then((json) => setData(json));
  };
  const orderBiriyani = async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        biriyaniItems: "Chcken biriyani",
      }
    );

    const saveResponseData = await response.data;
    await setData(saveResponseData);
    // .then((resolve) => resolve.data) /// res callback function
    // .then((json) => setOrderItem(json));
    // .then(reject) => reject)
  };

  const updateBiriyaniOrder = async () => {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/todos",
      {
        id: 201,
      }
    );
    setData(response.data);
    // .then((resolve) => resolve.data) /// res callback function
    // .then((json) => setOrderItem(json));
    // .then(reject) => reject)
  };

  const deleteBiriyaniOrder = async () => {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos",
      {
        id: 201,
      }
    );
    setData(response.data);
    // .then((resolve) => resolve.data) /// res callback function
    // .then((json) => setOrderItem(json));
    // .then(reject) => reject)
  };



  console.log(orderItem, "orderItem");
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <input type="text" /> Order Item
        <button onClick={getApiData} type="button" class="btn btn-primary">
          GET API DATA
        </button>
        <button onClick={orderBiriyani} type="button" class="btn btn-secondary">
          Order Something
        </button>
        {data.map((value, index) => {
          const { category, description } = value;
          return (
            <>
              <p>{category}</p>
              <p>{description}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

// destructring  const { category, description } = value;

// js events

// onchange post put

// onClick  get

// step 1

// api call

// data response store

// console.log(data)

// array or obj

// if array

// you can use Map

// Object.keys

// Object.values

// for in

// const obj = {
//   para1: "times of india",
//   para2: "someurl timeof india",
//   para3: "heading ",
//   para4:
//     "22-Jul-2021 — From the rose-red Gulab Khas or Sindhura to parrot beak shaped Totapuri,",
//   para5:
//     "unique mango varieties reign the Indian markets. Then there is the ...",
// };



// {
//   "biriyaniItems": "Chcken biriyani",
//   "id": 201,
//   "unique" : 300
// },{
//   "biriyaniItems": "Mutton biriyani",
//   "id": 202,
//   "unique" : 301
// },

// {
//   "biriyaniItems": "Manchiria",
//   "id": 203,
//   "unique" : 302

// }

// id:203


// axios.put('url', id:201)   // for updation

// axios.delete('url', id:302)

// 200  data received

// 201  created

// 400   not found

// 401 authentosation eror

// 401








// Create 4 buttons


// <Button>Get Method</Button>
// <Button>Post Method</Button>

// <Button>Put Method</Button>
// <Button>Delete Method</Button>

