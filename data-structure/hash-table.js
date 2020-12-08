// Hash Table

class HashTable{
  table = new Array(100);

  setValue = (key, value)=>{
    const idx = stringToNumber(key)
    if(this.table[idx]){
      this.table[idx].push([key, value])
    }else {
      this.table[idx] = [[key, value]];
    }
  };

  getValue = (key)=>{
    const idx = stringToNumber(key);

    if (!this.table[idx]) {
      return null;
    }

    return this.table[idx].find(el=> el[0] === key)[1];
  };
}

function stringToNumber(string){
  let hash = 13;
  for(let i=0; i< string.length; i++){
    hash = (hash * string.charCodeAt(i)) % 17
  }
  return hash;
}

const myTable = new HashTable();

myTable.setValue('firstName', 'Amin')
myTable.setValue('lastName', 'Rezaei')
myTable.setValue('age', 23)
myTable.setValue('bornIn', 'Malayer')
console.log(myTable.getValue('age'))