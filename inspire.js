const axios=require("axios")

const targets=['sad','unhappy','angry','hopeless','miserable','guilt']

function inspire(msg,foundword){
    axios.get('https://type.fit/api/quotes')
      .then(response =>{
        const randomquote=response.data[Math.floor(Math.random() * response.data.length)];
        msg.reply(`dont be ${foundword}\n${randomquote.author} once said:\n${randomquote.text}`)
      });
}

function react(msg){
    if(msg.author.bot)
      return
    const foundword=targets.find((target) => msg.content.toLowerCase().includes(target))
    if(foundword){
      console.log(`found the word ${foundword}`);
      inspire(msg,foundword)
    }
    if(msg.content.toLowerCase().includes("$inspire")){
      inspire(msg,foundword)
    }
    if(msg.content.toLowerCase() == "hello"){
      msg.reply("Wassup?");
    }
}


module.exports={inspire,react}