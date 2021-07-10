import { IToDo } from "../interfaces/todo.interface";

export class ToDo implements IToDo {
    constructor(
        public id: number,
        public userId: number,
        public title: string,
        public completed: boolean
    ){}
}