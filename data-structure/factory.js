// Factory Design Pattern

function Car(model){
  this.model = model;
  this.type = 'car';
}
function Bike(model){
  this.model = model;
  this.type = 'bike';
}

function Ride(){
  this.create  = (model, type) => {
    switch(type){
      case 1:
        return new Car(model);
        break;
      case 2:
        return new Bike(model);
        break;
    }   
  }
}

var rideFactory = new Ride();
var rides = [];


rides.push(rideFactory.create('Nissan', 1));
rides.push(rideFactory.create('Pride', 1));
rides.push(rideFactory.create('28', 2));
rides.push(rideFactory.create('26', 2));



rides.forEach(ride=>{
  console.log(`I have a ${ride.type} with model ${ride.model}`)
})
