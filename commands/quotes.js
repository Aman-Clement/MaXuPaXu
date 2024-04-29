// //sends a anime quote with a gif when the channel is active(randomly)

const axios=require("axios")
// // import fetch from 'node-fetch'

// const author=require('./animequotes.js')
// let array=author()
// const fetch=require('node-fetch')
// const quotes=["Why should I bare hatred towards someone who’s obviously weaker than myself? I only pity them.","It’s just pathetic to give up on something before you even give it a shot." ,"You can die anytime, but living takes true courage.","Every journey begins with a single step. We just have to have patience.","If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas","Life is not a game of luck. If you wanna win, work hard"]
// const authors=["Escanor","Reiko Mikami","Kenshin Himura","Milly Thompson (Trigun)","Alibaba Saluja (Universal Warriors)","Sora"]


function sdquotes(msg){

    if(msg.author.bot)
        return;
    if((Math.floor(Math.random()*10))%6==0){    axios.get('https://API.amanaranha.repl.co')
    .then(response =>{
        const random=response.data[Math.floor(Math.random() * response.data.length)];
        msg.reply(`${random.quote}`)
      });}
  
    // if((Math.floor(Math.random()*6))%6==0){
    //   var i=(Math.floor(Math.random()*6))
    //    msg.reply(`${quotes[i]}\n${authors[i]}`)      
    //     // aanimequote=response.data[Math.floor(Math.random()*response.data.length)]
        //     msg.reply(animequote)
        

    }


module.exports={sdquotes}