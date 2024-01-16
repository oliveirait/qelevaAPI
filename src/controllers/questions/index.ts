import { CreateNewQuestion } from "./createQuestion";
import { ListQuestions } from "./listQuestions";


export const Questions = {
  create: new CreateNewQuestion(),
  read: new ListQuestions()
} as const