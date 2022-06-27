"use strict"

// Describing the TodoList Model
const _ = require("lodash");
const JsonStore = require("./json-store");

const todoListStore = {
  // Describe the Store   
  store: new JsonStore("./models/todo-list-store.json", {
    todoListCollection: [],
  }),
  
  // Described the collection above, which is an array
  collection: "todoListCollection",
  
  // Describe the methods
  getAllTodos() {
    return this.store.findAll(this.collection);
  },
  
  addTodo(todo) {
    this.store.add(this.collection, todo);
    this.store.save();
  },
};

module.exports = todoListStore;