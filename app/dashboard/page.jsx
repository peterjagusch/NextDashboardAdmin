import React from 'react'
import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import RightBar from '../ui/dashboard/rightbar/rightbar'
import TransActions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'

function DashBoard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <TransActions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default DashBoard