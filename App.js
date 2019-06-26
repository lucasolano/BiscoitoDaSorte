import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

class Botao extends Component{

  constructor(props){
    super(props);
    this.state = {};
    this.estilo = StyleSheet.create({
      botao:{
        width:230,
        height:50,
        borderWidth:2,
        borderColor:props.cor,
        borderRadius:25, 
      },
      btnArea:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnTexto:{
        fontSize:18,
        fontWeight:'bold',
        color: props.cor
      }
    });
  }

  render(){
    return(
      <TouchableOpacity style={this.estilo.botao} onPress={this.props.eventoBotao}>
        <View style={this.estilo.btnArea}>
          <Text style={this.estilo.btnTexto}>{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class App extends Component {
  
  constructor (props){
    super(props);
    this.state = {
      textofrase: ''
    };
  
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.frases = ['Você me deu uma eternidade dentro dos nosso dias numerados',
    'Você é a resposta para todas as minhas orações. Você é uma canção, um sonho, um murmúrio, e não sei como consegui viver sem você durante tanto tempo',
    'Odeio não conseguir te odiar por mais que eu tente ou por menos que você faça...',
    'A vida é como uma caixa de chocolates. Você nunca sabe o que vai encontrar.',
    'Você foi minha vida inteira, mas eu fui só um capítulo da sua',
    'A coisa mais importante que você irá aprender é amar e ser amado em troca.',
    'Grandes poderes trazem grandes responsabilidades.',
    'A melhor maneira de esquecer uma mulher é transformá-la em LITERATURA',
    'Dizem que um dos dois sempre ama mais, meu Deus, quem dera não fosse eu.',
    'Um herói pode ser qualquer um, até mesmo um homem fazendo algo tão simples e reconfortante como colocar um casaco em torno dos ombros de um menino, para deixá-lo saber que o mundo não tinha terminado.'];

  }

  quebrarBiscoito(){


    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random()* this.frases.length);

    state.textofrase = '" ' + this.frases[numeroAleatorio] +' "';

    this.setState(state);

    //alert("Biscoito aberto");
  }

  render() {
    return (

      <View style={styles.container}>

        <Image source={require('./src/biscoito.png')} style={styles.img}/>
        <Text style={styles.textoFrase}>{this.state.textofrase}</Text>

        <Botao cor="#dd7b22" nome="Abrir Biscoito" eventoBotao={this.quebrarBiscoito}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    justifyContent:'center',
    alignItems: 'center'
  },
  img:{
    width:250,
    height:250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle:'italic'
  }

});
