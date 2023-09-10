import css from '../Notification/Notification.module.css'
export  function Notification({message}) {
  return (
    <h2 className={css.title}>{message}</h2>
  )
}
