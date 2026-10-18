"use client";
import { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getReunionResult, reunionQuestions, reunionResults } from "@/lib/reunionDiagnosis";
import { initialQuizState, quizReducer } from "@/lib/quizFlow";

export function ReunionDiagnosisClient() {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const heading = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);
  useEffect(() => { if (interacted.current) heading.current?.focus(); }, [state.index, state.finished]);
  const act = (action: Parameters<typeof quizReducer>[1]) => { interacted.current = true; dispatch(action); };
  const resultKey = state.finished ? getReunionResult(state.answers) : null;
  const result = resultKey ? reunionResults[resultKey] : null;
  const progress = state.finished ? 10 : state.index;

  return <section className="quiz card" aria-label="質問と診断結果">
    <div className="progress-label"><span>{result ? "回答完了" : `10問中 ${state.index + 1}問目`}</span><span>{progress} / 10</span></div>
    <div className="progress" role="progressbar" aria-label="回答の進捗" aria-valuemin={0} aria-valuemax={10} aria-valuenow={progress}><span style={{ width: `${progress * 10}%` }} /></div>
    {result ? <div className="result">
      <p className="eyebrow">今のあなたに合う向き合い方</p><h2 tabIndex={-1} ref={heading}>{result.title}</h2>
      <Image className="result-illustration" src={`/images/results/${resultKey}.webp`} alt="" width={900} height={600} sizes="(max-width: 700px) calc(100vw - 70px), 440px" />
      <p>{result.message}</p><h3>今できること</h3>
      <ol className="action-list">{result.actions.map(action => <li key={action}>{action}</li>)}</ol>
      <div className="notice"><p>この結果は回答をもとにした気持ちの整理のヒントです。復縁の確率や相手の気持ちを判定するものではなく、医療や心理カウンセリングの代わりにはなりません。</p><p>連絡を断られている場合は、別の手段で連絡せず、その意思を尊重してください。</p></div>
      <div className="quiz-actions"><button type="button" className="button" onClick={() => act({ type: "restart" })}>もう一度診断する</button><Link className="text-link" href="/">トップに戻る</Link></div>
    </div> : <div>
      <p className="eyebrow">Question {String(state.index + 1).padStart(2, "0")}</p>
      <h2 ref={heading} tabIndex={-1} id="question-title">{reunionQuestions[state.index].text}</h2>
      <div className="options" role="group" aria-labelledby="question-title">
        {reunionQuestions[state.index].options.map((label, value) => <button key={label} className="option" type="button" aria-pressed={state.answers[state.index] === value} onClick={() => act({ type: "answer", value })}><span>{label}</span><span aria-hidden="true">→</span></button>)}
      </div>
      <div className="quiz-actions"><button className="button button-secondary" type="button" disabled={state.index === 0} onClick={() => act({ type: "back" })}>前の質問に戻る</button><span className="note">回答を選ぶと次の質問へ進みます。</span></div>
      <p className="note privacy-note">回答は外部送信・永続保存しません。再読み込みやページを離れると消えます。</p>
    </div>}
  </section>;
}
