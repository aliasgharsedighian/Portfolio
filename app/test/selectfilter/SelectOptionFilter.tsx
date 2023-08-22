"use client";
import React, { useState, useMemo } from "react";

const todos = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
  { id: 3, todo: "Watch a classic movie", completed: false, userId: 4 },
  {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48,
  },
  { id: 5, todo: "Solve a Rubik's cube", completed: false, userId: 31 },
  {
    id: 6,
    todo: "Bake pastries for me and neighbor",
    completed: false,
    userId: 39,
  },
  {
    id: 7,
    todo: "Go see a Broadway production",
    completed: false,
    userId: 32,
  },
  {
    id: 8,
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
    userId: 13,
  },
  {
    id: 9,
    todo: "Invite some friends over for a game night",
    completed: false,
    userId: 47,
  },
  {
    id: 10,
    todo: "Have a football scrimmage with some friends",
    completed: false,
    userId: 19,
  },
  {
    id: 11,
    todo: "Text a friend I haven't talked to in a long time",
    completed: false,
    userId: 39,
  },
  { id: 12, todo: "Organize pantry", completed: true, userId: 39 },
  {
    id: 13,
    todo: "Buy a new house decoration",
    completed: false,
    userId: 16,
  },
  {
    id: 14,
    todo: "Plan a vacation I've always wanted to take",
    completed: false,
    userId: 28,
  },
  { id: 15, todo: "Clean out car", completed: false, userId: 33 },
  { id: 16, todo: "Draw and color a Mandala", completed: true, userId: 24 },
  {
    id: 17,
    todo: "Create a cookbook with favorite recipes",
    completed: false,
    userId: 1,
  },
  {
    id: 18,
    todo: "Bake a pie with some friends",
    completed: false,
    userId: 1,
  },
  { id: 19, todo: "Create a compost pile", completed: true, userId: 5 },
  {
    id: 20,
    todo: "Take a hike at a local park",
    completed: true,
    userId: 43,
  },
  {
    id: 21,
    todo: "Take a class at local community center that interests you",
    completed: false,
    userId: 22,
  },
  {
    id: 22,
    todo: "Research a topic interested in",
    completed: false,
    userId: 4,
  },
  {
    id: 23,
    todo: "Plan a trip to another country",
    completed: true,
    userId: 37,
  },
];

export default function App() {
  const [filterOption, setfilterOption] = useState("all");

  const filterTodoData = useMemo(() => {
    switch (filterOption) {
      case "active":
        const uncompletedTodos = todos?.filter((todo) => !todo.completed);
        return uncompletedTodos;
      case "completed":
        const completedTodos = todos?.filter((todo) => todo.completed);
        return completedTodos;
      default:
        return todos;
    }
  }, [filterOption, todos]);

  const renderTodo = filterTodoData.map((todo) => {
    return (
      <li key={todo.id} className="list-group-item">
        {todo.todo}
      </li>
    );
  });

  return (
    <div className="container d-flex flex-column justify-content-center mt-5">
      <div className="mb-3">
        <select
          value={filterOption}
          onChange={(e) => setfilterOption(e.target.value)}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Filter</option>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <ul className="list-group">{renderTodo}</ul>
      </div>
    </div>
  );
}
