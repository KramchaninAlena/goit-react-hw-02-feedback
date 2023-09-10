import css from '../Section/Section.module.css'
export function Section({title, children}) {
    return (
      <div className={css.container}>
          <h2 className={css.title}>{title}</h2>
          {children}
      </div>
    )
  }