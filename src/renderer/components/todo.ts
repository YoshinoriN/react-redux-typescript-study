export class Todo {
  id: number = Date.now();
  constructor(public description: string, public content: string, public done: boolean = false) {

  }
}