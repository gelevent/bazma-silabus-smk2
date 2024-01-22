const { storeTodo, todoQuestion } = require('./todoes')

const addTodo = async () => {
    const title = await todoQuestion("Masukan judul todo :")
    const description = await todoQuestion("Deskripsi untuk todo :")
    const status = await todoQuestion("masukan status todo :")

    storeTodo(title, description, status)
}

addTodo();