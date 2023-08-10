import Banner from 'components/Banner';
import styles from './Inicio.module.css'
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import React from 'react';
import videos from 'json/db.json'

export default function Inicio() {
  return (
    <>
      <Banner imagem="Home" />
      <Titulo>
        <h1>Lugar para guardar os filmes</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}

