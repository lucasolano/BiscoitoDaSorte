import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
  TouchableOpacity
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
        fontWeidght:'bold',
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

  quebrarBiscoito(){
    alert("Biscoito aberto");
  }

  render() {
    return (

      <View style={styles.container}>

        <Botao cor="#dd7b22" nome="Abrir Biscoito" eventoBotao={this.quebrarBiscoito}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20
  },

});