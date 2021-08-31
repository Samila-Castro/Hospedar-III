const express = require("express");
const cors = require("cors");
const routes = require('./routes.js');

// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());    
app.use(cors());
app.use(routes);


// const carros = [];

// app.get("/carros", (request, response) => {
//     const { qtde, marca } = request.query;

//     const foundByMarca = marca ? carros.filter(carro => carro.marca == marca) : carros



//     const carrosCopy = qtde ? foundByMarca.slice(0, qtde) : foundByMarca
    
        
//         response.json(carrosCopy);
    
//   });

// app.get("/carros/:id", (request, response) => {
//     const { id } = request.params;

//     const carro = carros.find(carro => carro.id === id);
//     if (!carro) return response.status(400).json();
      
//     response.json(carro)
    
//       });


// app.post("/carros", (request, response) => {
//     const { nome, marca, anoFabricacao, anoModelo, dataVenda } = request.body;
//     const carro = { id: uuid(), nome, marca, anoFabricacao, anoModelo, dataVenda};
//     carros.push(carro);
//     return response.json(carro);
//   });

//  app.put("/carros/:id", (request, response) => {
//     const { id } = request.params
//         const { nome, marca, anoFabricacao,anoModelo, dataVenda} = request.body
      
//         const indexCarro = carros.findIndex(carro => carro.id === id)
//         if (indexCarro === -1) return response.status(400).json();
      
//         const carro = { nome, marca, anoFabricacao, anoModelo, dataVenda }
//         carros[indexCarro] = carro;
      
//         response.json(carro);
//       });

// app.delete("/carros/:id", (request, response) => {
//     const { id } = request.params
      
//     const indexCarro = carros.findIndex(carro => carro.id === id)
//     if (indexCarro === -1) return response.status(400).json();
      
//     carros.splice(indexCarro, 1)
//     return response.status(204).json()
      
      
//       });

 module.exports = app;


