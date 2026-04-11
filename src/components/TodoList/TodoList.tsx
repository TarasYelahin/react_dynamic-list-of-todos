import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
interface TodoListProps {
  todos: Todo[];
  onShow: (todo: Todo) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onShow }) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map((todo, index) => (
        <tr
          key={todo.id}
          data-cy="todo"
          className={classNames({
            'has-background-info-light': todo.completed,
          })}
        >
          <td className="is-vcentered">{index + 1}</td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>
          <td
            className={classNames('is-vcentered', 'is-expanded', {
              'has-text-success': todo.completed,
              'has-text-danger': !todo.completed,
            })}
          >
            <p>{todo.title}</p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              type="button"
              className="button"
              onClick={() => onShow(todo)}
            >
              <span className="icon">
                <i className="far fa-eye" />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
