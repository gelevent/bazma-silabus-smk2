const { deleteById, todoQuestion } = require('./todoes')

const deleteTodo = async () => {
    const id = await todoQuestion("Masukan id todo:")
    deleteById(id)
}
deleteTodo();