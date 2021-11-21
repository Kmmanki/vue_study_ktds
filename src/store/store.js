import Vue from "vue";
import Vuex from "vuex";

//Vue가 Vuex라는 별도의 라이브러리를 사용하겠다.
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

//Vuex의 Store객체를 생성하고 외부에서 사용할 수 있도록 export하겠다.
export const store = new Vuex.Store({
  //상태변수
  state: {
    todoItems: storage.fetch(),
  },
  //상태변수를 변경하는 method(sync)
  mutations: {
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
    toggleComplete(state, payload){
        const {todoItem, index} = payload
        const {item, completed} = todoItem

        localStorage.removeItem(item)
        state.todoItems[index].completed = !completed
        localStorage.setItem(item,JSON.stringify(state.todoItems[index]))

    },
    clearTodos(state){
        state.todoItems= []
        localStorage.clear()
    }
  },
  //서버와 통시늘 담당하는 method(async)
  actions: {},
  //상태변수를 조회하는 method
  getters: {
      getTodoItems(state){
          return state.todoItems
      }
  },
});
