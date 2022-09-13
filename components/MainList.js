import styles from './MainList.module.css'

import MainListItem from './MainListItem'

export default function MainList() {
    return (
      <div>
        <div className={styles.container}>
            <MainListItem/>
        </div>
      </div>
    )
  }