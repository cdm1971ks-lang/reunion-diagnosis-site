export type QuizState = { index: number; answers: number[]; finished: boolean };
export const initialQuizState: QuizState = { index: 0, answers: [], finished: false };
export type QuizAction = { type: "answer"; value: number } | { type: "back" } | { type: "restart" };
export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  if (action.type === "restart") return { ...initialQuizState, answers: [] };
  if (action.type === "back") return { ...state, index: Math.max(0, state.index - 1), finished: false };
  if (state.finished || !Number.isInteger(action.value) || action.value < 0 || action.value > 3) return state;
  const answers = [...state.answers.slice(0, state.index), action.value];
  return { answers, index: Math.min(9, state.index + 1), finished: answers.length === 10 };
}
