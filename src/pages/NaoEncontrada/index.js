import React from 'react'
import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>404 ERRO!</h2>
            <p>O conteúdo que você procura não foi encontrado</p>
        </section>
    )
}
