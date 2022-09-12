import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <div className={styles.title}>
        <a href="#">WRITING WITH NO PURPOSE</a>
      </div>

      <div className={styles.navbar}>
        <a />
        <a href="#">Home</a>
        <a href="#">Random</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a />
      </div>
    </div>
  )
}