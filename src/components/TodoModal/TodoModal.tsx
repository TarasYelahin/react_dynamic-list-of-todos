import React from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';

interface Props {
  todo: Todo | null;
  user: User | null;
  loading: boolean;
  userError?: string | null;
  onClose: () => void;
}
export const TodoModal: React.FC<Props> = ({
  todo,
  user,
  loading,
  userError,
  onClose,
}) => {
  if (!todo) {
    return null;
  }

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />
      {loading ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div data-cy="modal-header">{`Todo #${todo.id}`}</div>
            <button
              data-cy="modal-close"
              className="delete"
              onClick={onClose}
            />
          </header>
          <div className="modal-card-body">
            {userError && (
              <div className="notification is-danger" data-cy="modal-error">
                {userError}
              </div>
            )}
            <p data-cy="modal-title">{todo.title}</p>
            <p data-cy="modal-user">
              by <a href={`mailto:${user?.email}`}>{user?.name}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
