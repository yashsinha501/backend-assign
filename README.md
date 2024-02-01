# Starting the Project

npm run start

<!-- This will start running the server at PORT 5000 -->


## Routes

```bash

localhost:5000/api/products (POST Request) =>  To Create specific record or insert data


localhost:5000/api/products (GET Request) => To get all the data as an response


localhost:5000/api/products/65bb98440214169382c3911a(GET Request) => To get specific data by ID as an response


localhost:5000/api/products/65bb98440214169382c3911a (DELETE Request) => To Delete specific data by ID


localhost:5000/api/products/65bb98440214169382c3911a (PUT Request) => To Update specific data based by ID 


localhost:5000/api/search?product=DSLR (GET Request) => To search Product by name


localhost:5000/api/search?description=high (GET Request) => To search records with description


localhost:5000/api/search?variant=Standard (GET Request) => To search record by variant name

```

## Structure of data

```bash

{
    "name": "xyz",
    "description": "xyz",
    "price":5000,
    "variants": [{
      "name":"x",
      "sku":"127",
      "additionalCost":0,
      "stockCount":2000
    },
    {
      "name":"y",
      "sku":"128",
      "additionalCost":0,
      "stockCount":4000
    },
    {
      "name":"z",
      "sku":"129",
      "additionalCost":500,
      "stockCount":1000
    }]
}

```

## Github

[Github Link](https://github.com/yashsinha501/backend-assign)