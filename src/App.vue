<template>
  <div>
    <h1>Todo List</h1>
    <AddTodo
    @add-todo="addTodo"
    />
    <TodoList
    v-bind:todos="todos"
    @remove-todo="removeTodo"
    />
  </div>

</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'App',
  data(){
    return{
      todos:[

      ]
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          this.todos=json
        })
  },
  methods:{
    removeTodo(id) {
      this.todos =this.todos.filter(t=>t.id !==id)
    },
    addTodo(todo){
      this.todos.push(todo)
    }
  },
  components: {
  TodoList, AddTodo
  }
}
</script>

<style>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
