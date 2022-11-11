import React, { ReactNode } from 'react';
import { test } from '@andresdossantos/test-scope.test'

export type ToDoProps = {
  children?: ReactNode;
};

export function ToDo({ children }: ToDoProps) {
  return (
    <div>
      <h1>This is a Todo</h1>

      {test()}
    </div>
  );
}
