/****** 

1- !Info -> Concluído 
2- !recuperarMana -> Concluído
3- !gastarMana -> Concluído
4- !recuperarVida -> Não iniciado
5- !perderVida -> Não iniciado
6- !uparAtributo -> Concluído
6- !uparNivel -> Não iniciado
7- !aumentarSensibilidade -> Não iniciado



                                                        *****/





const {consultaNome,aumentar5Pontos} = require('./dba/dba'); 
const {gastar1Mana,gastar2Mana,gastar3Mana,gastar10Mana,gastar15Mana,gastar20Mana,gastar50Mana} = require('./dba/gastarMana');               
const {aumentar1Ponto,aumentar2Pontos,aumentar3Pontos,aumentar10Pontos,aumentar15Pontos} = require('./dba/altAtributos');

const {recuperarTotalMana,recuperar50Mana,recuperar20Mana,recuperar10Mana,recuperar5Mana,recuperar3Mana,recuperar2Mana,recuperar1Mana} = require('./dba/recuperarMana');                                      
const Discord = require('discord.js');
const bot = new Discord.Client();
const modelo = require('./model/personagem');

//const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;


start = (BOT_LOGIN) => {
  
var Atributos= modelo.Atributos;
var Personagem = modelo.Personagem;
//var atr = new Atributos(91,60,94,93,57,86,77,86);
//var personagem = new Personagem(528671433761488906,"Fletcher",atr,20,8,14, 7,"https://img.ifunny.co/images/48f343f9a0af7eab5c718607f2404978aecdaa2e1c63c279fafcccbd2099511e_1.jpg");
//console.log(JSON.stringify(personagem.atributos) + "  DEU CERTO");

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const url = process.env.MONGO_DB_URL;
bot.login(BOT_LOGIN);

mongodb.connect(url, async (error,banco) => {

  if(error){
    throw error;
  }
  const dbo = banco.db('Elemellons');
  console.log("MongoDB e Bot Conectados!!");
//  const obj = personagem;
//db.customers.find({"tags": { $in: ["LUIZ"] }}).pretty()
  
  const mudança = {
    $set:{
      nome:"m"
    }
  };
  //const change = await dbo.collection('Personagens').updateOne({id_discord: 2},mudança);
 
  //await consulta.forEach(doc => console.log(doc));
  
  /*dbo.collection("Personagens").insertOne(personagem, (doc) =>{
    console.log(doc);
  })*/


bot.on("message", async (message) => {
  
try{
  if(message.content.slice(0,5).toLowerCase() == "!info"){
    consultaNome(message,dbo);
    }
  else if(message.content.slice(0,19) == "!recuperarTotalMana"){
    recuperarTotalMana(message,dbo);
  }else  if(message.content.slice(0,16) == "!recuperar50Mana"){
    recuperar50Mana(message,dbo);
  }else  if(message.content.slice(0,16) == "!recuperar20Mana"){
    recuperar20Mana(message,dbo);
  }else  if(message.content.slice(0,16) == "!recuperar10Mana"){
    recuperar10Mana(message,dbo);
  }else  if(message.content.slice(0,15) == "!recuperar5Mana"){
    recuperar5Mana(message,dbo);
  }else  if(message.content.slice(0,15) == "!recuperar3Mana"){
    recuperar3Mana(message,dbo);
  }else  if(message.content.slice(0,15) == "!recuperar2Mana"){
    recuperar2Mana(message,dbo);
  }else  if(message.content.slice(0,15) == "!recuperar1Mana"){
    recuperar1Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar10Mana"){
    gastar10Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar1Mana"){
    gastar1Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar2Mana"){
    gastar2Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar3Mana"){
    gastar3Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar5Mana"){
    gastar5Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar10Mana"){
    gastar10Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar15Mana"){
    gastar15Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar20Mana"){
    gastar20Mana(message,dbo);
  }else  if(message.content.slice(0,13) == "!gastar50Mana"){
    gastar50Mana(message,dbo);
  }else if(message.content.slice(0,15) == "!aumentar1Ponto"){
    aumentar1Ponto(message,dbo);
  }else if(message.content.slice(0,16) == "!aumentar2Pontos"){
    aumentar2Pontos(message,dbo);
  }else if(message.content.slice(0,16) == "!aumentar3Pontos"){
    aumentar3Pontos(message,dbo);
  }else if(message.content.slice(0,16) == "!aumentar5Pontos"){
    aumentar4Pontos(message,dbo);
  }else if(message.content.slice(0,17) == "!aumentar10Pontos"){
    aumentar10Pontos(message,dbo);
  }else if(message.content.slice(0,16) == "!aumentar15Pontos"){
    aumentar15Pontos(message,dbo);
  }
  
}catch(error){
  console.log("DEU ERRO -> " + error);
}
})
  
 

});
}

module.exports = {start};