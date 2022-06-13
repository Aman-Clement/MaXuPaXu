//removing a user from vc
function bully(oldVoiceState,newVoiceState,bot){
  //   const Guild = bot.guilds.cache.get("GuildID");
  //   const Member = "639503598249836566";
  //     if (newVoiceState.channel) { // The member connected to a channel.
  //         console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
  //     } else if (oldVoiceState.channel) { // The member disconnected from a channel.
  //         console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)
  //     };
  // // if (Member.voice.channel) {
  // //     Member.setVoiceChannel(NULL) //disconnet user
  // }
    
    console.log(`${newVoiceState.mute}`)
    console.log(`${oldVoiceState.mute}`)
    if(newVoiceState.id == "639503598249836566"){
      if(!newVoiceState.mute&&newVoiceState.member.voice.channel){
        newVoiceState.setMute(true)
        console.log("i have muted this faggot")
      }
  
      if(newVoiceState.id == "639503598249836566"){
        newVoiceState.disconnect();
        console.log("i have disconnected this faggot")
      }
    // while(true){
    //   if(!newVoiceState.mute&&newVoiceState.member.voice.channel)
    //      newVoiceState.setMute(true)
    // }
  
  }
  }
  module.exports={bully}
  
  