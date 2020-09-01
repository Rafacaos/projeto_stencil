import { Component, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.css',
  shadow: true,
})
export class AppCard {
  @Prop() titulo: string;
  @Prop() subtitulo: string;
  @Prop() imagem: string;
  @Prop() link: string;

  @State() open: boolean = false;
  @State() tocando: boolean = false;

  @Listen('mouseover', { capture: false })
  cardHover() {
    this.open = true;
  }
  @Listen('mouseleave', { capture: false })
  cardLeave() {
    this.open = false;
  }

  tocarMusica(){
    this.tocando = !this.tocando;
  }

  render() {
    return ([
      <div class="card">
        <div>
          <img class="card__imagem" src={this.imagem}/>
          <a href="#" class="card__titulo">{this.titulo}</a>
          <a href={this.link} target="__blank" class="card__titulo card__titulo--menor" >{this.subtitulo}</a>
        </div>
        <button class={{
            'play': true,
            'play--open': this.open || this.tocando
          }} onClick={() => this.tocarMusica()}>
          {this.tocando
            ? <svg height="16" role="img" width="16" viewBox="0 0 24 24"><rect x="5" y="3" width="4" height="18" fill="#ffffff"></rect><rect x="15" y="3" width="4" height="18" fill="#ffffff"></rect></svg>
            : <svg height="16" role="img" width="16" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="#ffffff"></polygon></svg>
          }
        </button>
      </div>
    ]);
  }

}
