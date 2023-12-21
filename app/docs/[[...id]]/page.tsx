import styles from './style.module.css'

const DocsPage = ({ params }) => {
  return (
    <div className={`${styles.title} ${styles.another}`}>
      Docs page {params.id}
    </div>
  )
}

export default DocsPage
