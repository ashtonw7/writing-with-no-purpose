import styles from './MainListItem.module.css'

export default function MainListItem() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src="https://media.geeksforgeeks.org/wp-content/post-ads-banner/2021-12-29-11-18-16-DSA_Ad_icon%20(1).png" className={styles.responsiveImage}/>
          </div>
          <div className={styles.text}>
            asdfasdfasdfasdfasdfasdf
          </div>
        </div>
      </div>
    )
  }