import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      console.log(categoriasComVideos);
    })
    .catch((error) =>{
      console.log(error.message);
    });
  });
  // http://localhost:8000/categorias?_embed=videos

  return (
    <div style={{ background: '#141414'}}>
      <Menu />

      {/*<BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        category={dadosIniciais.categorias[5]}
      />*/}

      <Footer />
    </div>
  );
}

export default Home;
