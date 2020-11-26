// Optional chainig - Elvis operator
const world = {
  asia:{
    iran:{
      aCity: 'malayer'
    },
    japan:{
      aCity: 'tokyo'
    }
  },
  europe:{
     germany:{
       aCity: 'berlin'
     }
  }
}

// if there is nothing that we want there will be no error
// Not working in repel.it
const whatWeWant1 = world?.asia?.iran?.aCity;
const whatWeWant2 = world?.asia?.iran?.['aCity'];

console.log({whatWeWant1, whatWeWant2})