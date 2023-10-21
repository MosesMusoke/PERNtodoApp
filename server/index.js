const express = require('express')
const cors = require('cors')
const pool = require('./db')

const port = 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


//create a todo
app.post('/todos', async (req, res) => {

    try {
        const { description } = req.body

        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", [description])

        res.json(newTodo.rows)
        
    } catch (error) {
        console.error(error.message)
    }

})

//get all todos
app.get('/todos', async (req, res) => {

    try {
        const allTodos = await pool.query("SELECT * FROM todo")

        res.json({status:200, data:allTodos.rows})

    } catch (error) {
        console.error(error.message)
    }
})

//get a specific todo
app.get('/todos/:id', async (req, res) => {
    
    try {
        const id = req.params.id

        const selectedTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

        res.json({status:200, data:selectedTodo.rows})

    } catch (error) {
        console.error(error.message);
    }
})

//update a todo
app.put('/todos/:id', async (req, res) => {
    
    try {
        const { id } = req.params
        const description = req.body.description

        const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])

        console.log(updatedTodo);
        res.json({status:200, message:`Todo with id ${id} updated successfully`})

    } catch (error) {
        console.error(error.message)
    }
})

//delete a todo
app.delete('/todos/:id', async (req, res) => {

    try {
        const { id } = req.params

        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])

        res.json({status:200, message:`Todo with id ${id} deleted successfully`})

    } catch (error) {
        console.error(error.message);
    }
})



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

