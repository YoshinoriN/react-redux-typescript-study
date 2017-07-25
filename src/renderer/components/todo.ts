export class Todo {
  id: number = Date.now();
  constructor(public description: string, public content: string, public done: boolean = false) {

  }
}

export class List {
  todos: { [key: number]: Todo } = {};
}