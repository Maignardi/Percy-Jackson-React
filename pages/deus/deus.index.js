import React, { Component } from 'react';
import Header from '../../components/Header';
import '../deus/deus.css'
import './script.js'
class Deus extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
        
      }
      handleClick() 
      {
        var checked = document.querySelectorAll('input[type=radio]:checked');
      
        console.log(checked);
        var poseidon = 0;
        var hades = 0;
        var apollo = 0;
        var zeus = 0;
        checked.forEach(function(teste){
            
            if(checked[0].value=='poseidon'){
                poseidon = poseidon + 1;
                return(console.log(poseidon));
            }
            if(checked[0].value=='hades'){
                hades = hades + 1;
                return(hades);
            }
            if(checked[0].value=='apollo'){
                apollo = apollo + 1;
                return(apollo);
            }
            if(checked[0].value=='zeus'){
                zeus = zeus + 1;
                return(zeus);
            }
           

        });
        
        if(poseidon>hades && poseidon>zeus && poseidon>apollo){
            return(document.write('Parabens, voce e um filho(a) de Poseidon'))
        }
        if(hades>poseidon && hades>zeus && hades>apollo){
            return(document.write('Parabens, voce e um filho(a) de Hades'))
        }
        if(zeus>hades && zeus>poseidon && zeus>apollo){
            return(document.write('Parabens, voce e um filho(a) de Zeus'))
        }
        if(apollo>hades && apollo>zeus && apollo>poseidon){
            return( document.write('Parabens, voce e um filho(a) de Apollo'))
        }
        

        }
    
        render(){
        return(
            <div>
                <form className='form' >
                    
                    <div>
                        
                    <label className='form'>1.Qual seu Elemento favorito:<br/>
                    a) Agua<input type='radio'  name='elemento' value='poseidon' id='poseidon'></input><br/>
                    b) Terra<input type='radio'  name='elemento' value='hades' id='hades'></input><br/>
                    c) Fogo<input type='radio'  name='elemento' value='apollo' id='apollo'></input><br/>
                    d) Ar<input type='radio' name='elemento' value='zeus' id='zeus'></input><br/>
                    </label>
                    </div>
                    <div>
                    <label  className='form'>2.Qual sua arma favorita para um combate:<br/>
                    a) Espada<input type='radio'  name='arma' value='poseidon' id='poseidon'></input><br/>
                    b) Machado<input type='radio'  name='arma' value='zeus' id='zeus'></input><br/>
                    c) Arco<input type='radio'  name='arma' value='apollo' id='apollo'></input><br/>
                    d) Adaga<input type='radio'  name='arma' value='hades' id='hades'></input><br/>
                    </label>
                    </div>
                    <div>
                    <label  className='form'>3.Qual seu poder favorito:<br/>
                    a) Controlar os Raios<input type='radio'  name='poder' value='zeus' id='zeus'></input><br/>
                    b) Controlar o Mar<input type='radio'  name='poder' value='poseidon' id='poseidon'></input><br/>
                    c) Controlar os Mortos<input type='radio'  name='poder' value='hades' id='hades'></input><br/>
                    d) Controlar o Fogo<input type='radio'  name='poder' value='apollo' id='apollo'></input><br/>
                    </label>
                    </div>
                    <div>
                    <label  className='form'>4.Você se considera:<br/>
                    a) Criativo<input type='radio'  name='jeito' value='apollo' id='apollo'></input><br/>
                    b) Controlador<input type='radio'  name='jeito' value='zeus' id='zeus'></input><br/>
                    c) Calmo<input type='radio'  name='jeito' value='hades' id='hades'></input><br/>
                    d) Observador<input type='radio'  name='jeito' value='poseidon' id='poseidon'></input><br/>
                    </label>
                    <label className='form'>5.Onde voce prefere passar as ferias?<br/>
                    a)Praia<input type='radio'  name='ferias' value='apollo' id='apollo'></input><br/>
                    b)Floresta<input type='radio'  name='ferias' value='hades' id='hades'></input><br/>
                    c)Cidade<input type='radio'  name='ferias' value='zeus' id='zeus'></input><br/>
                    d)Cruzeiro<input type='radio'  name='ferias' value='poseidon' id='poseidon'></input><br/>
                    </label>
                    <button  id='button' type='button' onClick={this.handleClick}  >Finalizar </button>
                    
                    </div>
                </form>
            </div>
        );
            
        
    }
}

export default Deus;