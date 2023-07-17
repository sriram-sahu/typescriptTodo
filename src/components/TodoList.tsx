import React, { useState } from "react";

const TodoList = (props: any) => {
  const { todoList, setTodos } = props;

  const onDeleteTodo = (id: number) => {
    console.log(id);
    const updatedList = todoList.filter((each: any) => {
      console.log(each.todo);
      return each.id !== id;
    });
    setTodos(updatedList);
  };
  const onChangeCheckbox = (item: any) => {
    const updatedTodo = todoList.map((each: any) => {
      if (each.id === item.id) {
        return { ...each, isDone: !each.isDone };
      } else {
        return each;
      }
    });
    setTodos(updatedTodo);
  };

  const onClickIsEditable = (item: any) => {
    const updatedTodo = todoList.map((each: any) => {
      if (each.id === item.id) {
        return { ...each, isEditable: !each.isEditable };
      } else {
        return each;
      }
    });
    setTodos(updatedTodo);
  };

  const editableText = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      {todoList.map((each: any) => (
        <div key={each.id} className='d-flex'>
          <input
            type='checkbox'
            checked={each.isDone}
            onChange={() => onChangeCheckbox(each)}
          />
          {each.isEditable ? (
            <div className='d-flex'>
              <input
                className={each.isDone ? "text-danger" : "text-capitalize"}
                contentEditable={true}
                onChange={editableText}
                value={each.todo}
              />

              <button
                onClick={() => onClickIsEditable(each)}
                className='btn btn-primary m-2'
              >
                Save
              </button>
            </div>
          ) : (
            <div className='d-flex'>
              <h1 className={each.isDone ? "text-danger" : "text-capitalize"}>
                {each.todo}
              </h1>
              <button
                onClick={() => onClickIsEditable(each)}
                className='btn btn-primary m-2'
              >
                Edit
              </button>
            </div>
          )}
          <button
            onClick={() => onDeleteTodo(each.id)}
            className='btn btn-primary m-2'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
