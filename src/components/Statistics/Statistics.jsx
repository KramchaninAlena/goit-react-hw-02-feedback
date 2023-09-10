import css from '../Statistics/Statistics.module.css'
export  function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
       <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive Feedback: {!positivePercentage ? 0 : Math.round(positivePercentage)}%</li>
      </ul>
      )
}
