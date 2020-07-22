import React from "react";
import CartList from "../components/CartList";
import { Todos } from "../models/Todos";
import { useQuery } from "@apollo/client";
import { GetAllTodos } from "../operations/__generated__/GetAllTodos";
import { GET_ALL_TODOS } from "../operations/queries/getAllTodos";

const CartListContainer = () => {
  const {
    loading: isTodosLoading,
    data: todosConnection,
    error: todosError,
  } = useQuery<GetAllTodos>(GET_ALL_TODOS);

  if (isTodosLoading) {
    return <div>Loading...</div>;
  }

  if (todosError) {
    return <div>An error occurred {JSON.stringify(todosError)}</div>;
  }

  if (!todosConnection) {
    return <div>None</div>;
  }

  const todos: Todos = todosConnection.todos.edges.map((t) => t?.node) as Todos;

  return <CartList filteredTodos={todos} />;
};

export default CartListContainer;
