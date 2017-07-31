export enum Types {
  AddTodo
}

export interface Action<TPayload> {
  type: Types;
  payload: TPayload;
}

export class AddTodoPayload {
  constructor(public description: string, public content: string) {

  }
}

export function addTodo(description: string, content: string): Action<AddTodoPayload> {
  return {
    type: Types.AddTodo,
    payload: new AddTodoPayload(description, content)
  };
}