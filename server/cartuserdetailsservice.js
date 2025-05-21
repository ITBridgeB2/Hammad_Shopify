import cors from 'cors';
import express from 'express';
import mysql from 'mysql2/promise';     

var cartapp = express();
cartapp.use(express.json());
cartapp.use(express.urlencoded());

cartapp.use(cors())

const db = {
    host: "localhost",
    user: "root",
    password: 'root',
    database: 'cart'
};


//save user
cartapp.post('/userdetails', async (req, res) => {
    try {
        const connection = await mysql.createConnection(db);
        const { mobileNumber, password } = req.body;
        const [result] = await connection.execute(
            'INSERT INTO userdetails (mobileNumber, password) VALUES (?, ?)',
            [mobileNumber, password]
        );
        await connection.end();
        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert data' });
    }
});


    //get user and validate
//http://localhost:9888/userdetails/9663330910/mypass
cartapp.get("/userdetails/:mobileNumber/:password", async function (request, response) {    
    const mobileNumber = request.params.mobileNumber;
    const password = request.params.password;
    const connection = await mysql.createConnection(db);
    const [result] = await 
    connection.execute('SELECT * FROM userdetails where mobileNumber = ? and password = ? ', [mobileNumber, password]);
    if (result.length == 0)
        return response.status(204).json(204,"user not found");   
    else
       // return response.status(200).json("user found");
       return response.status(200).json(result[0].name)
})


cartapp.post('/products/:category', async (req, res) => {
  const category = req.params.category;
  const quantity = req.body.quantity;

  try {
    const connection = await mysql.createConnection(db);
    const sql = `INSERT INTO products (category, quantity) VALUES (?, ?)`;
    await connection.execute(sql, [category, quantity]);
    await connection.end();
    res.status(200).json({ message: 'Item added to products' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});


// Endpoint to retrieve aggregated product data
cartapp.get('/api/products', async (req, res) => {
  try {
    const connection = await mysql.createConnection(db);
    const [rows] = await connection.execute(
      'SELECT category, SUM(quantity) AS total_quantity FROM products GROUP BY category'
    );
    await connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});


cartapp.delete('/products', async (req, res) => {
  try {
    const connection = await mysql.createConnection(db);
    await connection.execute('DELETE FROM products');
    await connection.end();
    res.status(200).json({ message: 'Cart cleared' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ error: 'Failed to clear cart' });
  }
});



cartapp.listen("9888")
console.log("Userdetail app started on 9888");