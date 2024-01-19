import { CreateNewQuestion } from "./createQuestion";
import { CreateNewQuestionV2 } from "./createQuestionV2";
import { ListQuestions } from "./listQuestions";


export const Questions = {
  create: new CreateNewQuestion(),
  read: new ListQuestions()
}

export const QuestionsV2 = {
  create: new CreateNewQuestionV2()
}