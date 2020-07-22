import React from "react";
import MainSection from "../components/MainSection";
import { useQuery } from "@apollo/client";
import { GET_ALL_TODOS } from "../operations/queries/getAllTodos";
import { GetAllTodos } from "../operations/__generated__/GetAllTodos";

export default function Main() {
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

  return <MainSection itemsCount={todosConnection.todos.edges.length} />;
}
