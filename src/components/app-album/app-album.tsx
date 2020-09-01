import { Component, h, State } from '@stencil/core';

interface Album {
    id: number,
    nome: string,
    avatar: string,
    descricao: string,
    imagem: string,
    link: string,
}


@Component({
  tag: 'app-album',
  styleUrl: 'app-album.css',
  shadow: true,
})
export class AppAlbum {
  @State() albuns: Album[] = [];

  componentWillLoad() {
    //fetch
    const url = "https://5f4d9c85eeec51001608ecd8.mockapi.io/spotify/musicas";
    return fetch(url).then((resposta)=>{
      return resposta.json().then((album)=>{
        this.albuns = album;
        return album;
      })
    })
  }


  render() {
    return (
      <section class="album">

        <div class="album__header">
          <div class="album__titulo">
            <a class="album__link album__link--strong" href="#">Shortcuts</a>
          </div>
          <div class="album__mais">
            <a class="album__link" href="#">SEE ALL</a>
          </div>
        </div>

        {this.albuns.map(function(valor){
          return <app-card
          titulo={valor.nome}
          subtitulo={valor.descricao}
          imagem={valor.imagem}
          link={valor.link}
          >
          </app-card>
        })}        
      </section>
    );
  }

}
