//working on mod 



let member=member.mentions.members.first();
if(!member){
    return message.reply('Enter a valid member of the server');
}
if(!member.kickable)
    return message('Member cannot be kicked')
else{
    member.kick();}