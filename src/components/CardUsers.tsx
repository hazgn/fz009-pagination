// import React from 'react'
import { users } from '../utils/interfaces/users'
import styles from '../assets/css/card.module.css'
import moment from 'moment'

const CardUsers = (props:users) => {
  return (
    <div className={styles['card']} >
     <div className={styles['card-body']} >
      <div className={styles['avatar']}>
        <img src={props.avatar.url} alt={props.avatar.alt} className={styles['avatar']} />  
      </div>
      <p className={styles['id']}>ID : <span className={styles['user-id']}>{props.userId}</span></p>
        <p className={styles['user']}>Email : <span className={styles['user-sub']}>{props.email}</span></p>
        <p className={styles['user']}>Username : <span className={styles['user-sub']}>{props.username}</span></p>
        <p className={styles['user']}>Birthdate : <span className={styles['user-sub']}>{moment(props.birthdate).format('MMMM Do YYYY')}</span></p>
        <p className={styles['user']}>Join : <span className={styles['user-sub']} style={{color:'green'}}>{moment(props.registeredAt).fromNow()}</span></p>
     </div>
    </div>
  )
}

export default CardUsers