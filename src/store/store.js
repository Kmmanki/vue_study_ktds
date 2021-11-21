import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from 'vue-axios'


//Vue가 Vuex라는 별도의 라이브러리를 사용하겠다.
Vue.use(Vuex);

Vue.use(VueAxios, axios);

const api_url = 'http://localhost:4500/api/todos'

//Vuex의 Store객체를 생성하고 외부에서 사용할 수 있도록 export하겠다.
export const store = new Vuex.Store({
  //상태변수
  state: {
    todoItems: [],
  },
  //서버와 통시늘 담당하는 method(async)
  actions: {
    loadTodoItems(context) {
      axios
        .get(api_url)
        .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((error) => console.log(error));
    },
    removeTodo(context, payload) {
      axios
        .delete(`${api_url}/${payload.id}`)
        .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((error) => console.log(error));
    },
    addTodo(context, payload){
      axios.post(`${api_url}/${payload}`)
      .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((error) => console.log(error));
    },
    toggleTodo(context,payload){
      axios.patch(`${api_url}/${payload.id}`)
      .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((error) => console.log(error));
    }
  },
  //상태변수를 변경하는 method(sync)
  mutations: {
    setTodoItems(state,items){
      state.todoItems = items
    },
    addTodo(state, newTodoText) {
      const obj = { completed: false, item: newTodoText };
      localStorage.setItem(obj.item, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodo(state, payload){
        const {todoItem, index} = payload
        console.log(todoItem.item)
        localStorage.removeItem(todoItem.item)
        state.todoItems.splice(index,1)
    },
    // toggleComplete(state, payload){
    //     const {todoItem, index} = payload
    //     const {item, completed} = todoItem

    //     localStorage.removeItem(item)
    //     state.todoItems[index].completed = !completed
    //     localStorage.setItem(item,JSON.stringify(state.todoItems[index]))

    // },
    clearTodos(state){
        state.todoItems= []
        localStorage.clear()
    }
  },
  //상태변수를 조회하는 method
  getters: {
      getTodoItems(state){
          return state.todoItems
      }
  },
});
