import React, { Component } from 'react';
import '../batalha/batalha.css'
import deuses from './assets/deuses.png';


class Batalha extends Component{

    constructor(props){
        super(props);
        this.state={
            textos: ''
        };

        this.acao = this.acao.bind(this);

        this.frases = ['A batalha comecou e vc seguiu em direcao ao norte do acampamento, seguindo o riacho voce se deparou com dois filhos de Hermes, infelizmente voce foi derrotado e levado para enfermaria.', 'A batalha comecou e voce esta no time azul, junto com uma filha de Afrodite, e um filho de Ares, voce chegou aonde estava a bandeira inimiga, e la uma filho de hefesto e dois filhos de Ares faziam a protecao, apos a filha de Afrodite cair na armadilha do filho de Hefesto, voce conseguiu derrotar junto com o Filho de Ares, os tres inimigos e  ganhou a batalha para o time azul', 'A batalha comecou e voce dessa vez decidiu fazer a protecao da sua bandeira,apos alguns instantes um filho de Zeus, um de dionisio e um de Hermes surgem para capturar a bandeira, logo o filho de Zeus o derrota e captura a bandeira, voce perdeu', 'A batalha comecou e voce partiu para o fornt da batalha junto com os outros, la voce derrotou incontaveis semi-deuses, porem escorregou e torceu o tornozelo, assim sendo retirado da batalha'];
    }

    acao(){
        let state = this.state;
        var aleatorio = Math.floor(Math.random() * this.frases.length);
        state.textos = this.frases[aleatorio];
        this.setState(state);
    }

    
    render(){
        return(
            <div className='container'>
            <figure>
                <img src={deuses} />
            </figure>

            <Botao acaoBtn={this.acao}/>
            <h3 className='frases'>  {this.state.textos} </h3>
            </div>
        );
            
        
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>Começar Caça-bandeira</button>
            </div>
        );
    }
}


export default Batalha;