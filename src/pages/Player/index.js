import React, { useEffect, useState } from 'react';
import style from './Player.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';


export default function Player() {
  const parametros = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/CarlosRoberto01/Cinetag-api/videos?id=${parametros.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(...dados)
      })
  }, [])

  if (!video) {
    return <NaoEncontrada />
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={style.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </section>

    </>
  )
}
