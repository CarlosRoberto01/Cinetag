import Banner from 'components/Banner';
import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import Titulo from 'components/Titulo';
import React from 'react';

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="Home" />
      <Titulo>
        <h1>Lugar para guardar os filmes</h1>
      </Titulo>
      <Rodape />
    </>
  )
}

