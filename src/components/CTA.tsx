import React from 'react'
import styles from '../style'
import Button from './Button'

function Clients() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Vamos experiementar nossos serviços!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Tudo o que você precisa para aceitar pagamentos com cartão e expandir seus negócios em qualquer lugar do planeta.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles={{}} />
    </div>
  </section>
  )
}

export default Clients