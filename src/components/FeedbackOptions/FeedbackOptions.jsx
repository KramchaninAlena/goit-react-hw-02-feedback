import css from '../FeedbackOptions/FeedbackOptions.module.css'

export function FeedbackOptions({options, onLeaveFeedback}) {
      return (
    <ul className={css.listButton}>
      {options.map(btnName => {
        return <button key={btnName} className={css.button} name={btnName} onClick={onLeaveFeedback}>{btnName}</button>
      })}  
   </ul>
  )
}
