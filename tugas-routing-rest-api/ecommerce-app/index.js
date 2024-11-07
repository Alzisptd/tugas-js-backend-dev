const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
    { id: 1, name: 'Elektronik' }, 
    { id: 2, name: 'Perabotan' }
];

// GET Semua Produk
app.get('/api/produk',(req,res)=>{
    res.json(products);
});

// GET produk berdasarkan ID
app.get('/api/produkid/:id',(req,res)=>{
    const productid = parseInt(req.params.id);
    const product = products.find(p => p.id === productid);
    if (product){
        res.json(product);
    }else{
        res.status(404).json({Message : 'Product Not Found'});
    }
});

// GET produk berdasarkan Nama
app.get('/api/produkname/:name',(req,res)=>{
    const productname = req.params.name;
    const product = products.find(p => p.name.toLowerCase() === productname.toLowerCase());
    if (product){
        res.json(product);
    }else{
        res.status(404).json({Message : 'Product Not Found'});
    }
});

// POST produk baru
app.post('/api/produk', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
  });


// PUT update produk
app.put('/api/produk/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
      products[productIndex] = { id: productId, ...req.body };
      res.json(products[productIndex]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });


// DELETE produk
app.delete('/api/produk/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
  });

app.listen(port,()=>{
    console.log(`Cobain Port ${port}`);
});