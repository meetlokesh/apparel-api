Use tools like Postman to test the API endpoints.

PUT /vendor/update
PUT /vendor/bulk-update
POST /customer/check-order
POST /customer/lowest-cost

to start run 

npm install 

npm run dev

All the Api and its body payload

localhost:3000/vendor/update
{
    "code": "APL012",
    "size": "M",
    "stock": 10,
    "price": 22.99
}

localhost:3000/vendor/bulk-update
[  {
    "code": "APL011",
    "size": "L",
    "stock": 28,
    "price": 32.99
  },
  {
    "code": "APL012",
    "size": "L",
    "stock": 25,
    "price": 27.99
  }]

  localhost:3000/customer/check-order
   [{
    "code": "APL012",
    "size": "L",
    "quantity": 120
  }]

  localhost:3000/customer/lowest-cost
   [{
    "code": "APL012",
    "size": "L",
    "quantity": 10
  }]