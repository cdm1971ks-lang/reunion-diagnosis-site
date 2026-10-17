import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import ts from "typescript";
const source = readFileSync(new URL("../lib/quizFlow.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { quizReducer, initialQuizState } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("10回答がそろうまで結果に進まない", () => {
  let state = initialQuizState;
  for (let index = 0; index < 10; index++) {
    state = quizReducer(state, { type: "answer", value: 0 });
    assert.equal(state.finished, index === 9);
    assert.equal(state.answers.length, index + 1);
    assert.equal(state.index, Math.min(index + 1, 9));
  }
  assert.deepEqual(quizReducer(state, { type: "answer", value: 3 }), state);
});
test("戻って回答を変更すると後続回答が破棄される", () => {
  let state = initialQuizState;
  for (let index = 0; index < 5; index++) state = quizReducer(state, { type: "answer", value: 0 });
  state = quizReducer(state, { type: "back" });
  state = quizReducer(state, { type: "back" });
  assert.equal(state.index, 3);
  state = quizReducer(state, { type: "answer", value: 2 });
  assert.deepEqual(state.answers, [0, 0, 0, 2]);
  assert.equal(state.finished, false);
});
test("再診断は回答と進捗を初期化する", () => {
  const state = quizReducer({ answers: Array(10).fill(3), index: 9, finished: true }, { type: "restart" });
  assert.deepEqual(state, initialQuizState);
  assert.equal(quizReducer(state, { type: "back" }).index, 0);
});
test("不正な回答では進捗しない", () => {
  for (const value of [-1, 4, NaN, 0.5]) assert.deepEqual(quizReducer(initialQuizState, { type: "answer", value }), initialQuizState);
});
