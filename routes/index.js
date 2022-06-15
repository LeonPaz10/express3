const { Router } = require('express');
const router = Router();


const productos= []

//recibe y agrega un producto y lo devuelve con su id asignado
router.post('/api/productos', (req, res) => {

    const { nombre, precio, thumbnail } = req.body
    productos.push({ id: productos.length + 1, nombre, precio, thumbnail })
    res.send('Producto agregado'); 
   
})

//devuelve todos los productos
router.get('/api/productos', (req, res) => {
    res.json(productos)
})


//devuelve un producto por su id
router.get('/api/productos/:id', (req, res) => {
    const { id } = req.params
    const producto = productos.find(producto => producto.id == id)
    if (!producto) return res.status(404).send('el producto no existe')
    res.json(producto)
    
})    
    

//recibe y actualiza un producto por su id
router.put('/api/productos/:id', (req, res) => {
    const { id } = req.body
    const { nombre, precio, thumbnail } = req.body
    const producto = productos.find(producto => producto.id == id)
    if (!producto) return res.status(404).send('el producto no existe')
    producto.nombre = nombre
    producto.precio = precio
    producto.thumbnail = thumbnail
    res.send('Producto actualizado')


})

//elimina un producto por su id
router.delete('/api/productos/:id', (req, res) => {
    const { id } = req.params
    const producto = productos.find(producto => producto.id == id)
    if (!producto) return res.status(404).send('el producto no existe')
    productos.splice(productos.indexOf(producto), 1)
    res.send('Producto eliminado')
})



module.exports = router;