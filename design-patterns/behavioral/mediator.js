// Mediator Design Pattern

// Member
function Member(name){
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function(message){
    this.chatroom.send(message, this)
  },
  // for functionalliy to use member.foo we defined reply and recive method in member too
  reply: function(message, toWho){
    this.chatroom.reply(message, this, toWho)
  },
  recive: function(message, fromWho){
    console.log(`${fromWho.name} to ${this.name} : ${message}`)
  }
}


// Chatroom
function Chatroom(){
  this.members = {}
}

Chatroom.prototype = {
  addMember: function(member){
    this.members[member.name] = member
    member.chatroom = this
  },
  reply:function(message, fromWho, toWho){
    toWho.recive(message, fromWho)
  },
  send:function(message, fromWho){
    console.log(`${fromWho.name}: ${message}`)
  }
}

// Creatre an instance of chatroom
const chat = new Chatroom();

// Defining members
const amin = new Member('Amin');
const mmd = new Member('MMD');
const esi = new Member('ESI');

// Adding members to chat
chat.addMember(amin);
chat.addMember(mmd);
chat.addMember(esi);

// Playing !!!
amin.send('Hello To All')
amin.reply('Hi mohammad', mmd)
mmd.reply('Hi Dude!', amin)