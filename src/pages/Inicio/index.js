import Banner from 'components/Banner';
import styles from './Inicio.module.css'
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import React, { useEffect, useState } from 'react';

export default function Inicio() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/CarlosRoberto01/Cinetag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
          setVideos(dados)
      })
  }, [])

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

