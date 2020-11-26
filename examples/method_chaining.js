// Method chaining
function SayFrinedName(me){
  this.me = me;
}

SayFrinedName.prototype = {
  // addfriend must not to be arrow function
  addFriend: function(friend){
    console.log(`Amin is friend with ${friend}`);
    return this
  },
  sayAge: function(age){
    console.log(age)
    return this
  },
  upperCaseME: function(){
    const name = this.me;
    const uppercasedName = name.toUpperCase()
    console.log(uppercasedName)
    return this
  },
  seperateWordsBy: function(seperator){
    const name = this.me;
    const seperatedName = name.split('').join(seperator)
    console.log(seperatedName)
  }
}

const friend = new SayFrinedName('Mohsen');

friend.addFriend('Ali').addFriend('Mmd').addFriend('Hosein').sayAge(20).sayAge(30).upperCaseME().seperateWordsBy('_');

console.log('--------------------------')