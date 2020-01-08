var file;
var parking_lot = [];
var num_of_cars = 0;

function initialize(file){
  var fs = require('fs')
  var contents = fs.readFileSync(file, 'utf8')
  var str = contents.split("\n").map(function (val) {
    return String(val)
  });
  last = str.length-1
  list = str.slice(1, last)
}

function create_parking_lot(a){
    num_of_cars = a;
    for (a=0; a<num_of_cars; a++){
        cars = {"slot":parking_lot.length+1, "plate": "", "color": ""}
        parking_lot.push(cars)
    }
}

function park(plate, color){
  for (b=0; b<num_of_cars; b++){
    if(parking_lot[b].plate == ''){
      cars = {"slot":b+1, "plate": plate, "color": color}
      parking_lot.splice(b, 1, cars)
      console.log("Mobil masuk ke lot "+(b+1))
      return 0;
    }
  }
  new_num_cars = num_of_cars+1;
  if (new_num_cars > parking_lot.length) {
    console.log('Parkir Penuh');
  }
}


function leave(slot_num){
  console.log("Mobil Keluar: "+parking_lot[slot_num-1].plate+". Nomor Lot: "+slot_num)
    cars = {"slot":slot_num, "plate": '', "color": ''}
    parking_lot.splice(slot_num-1, 1, cars)
  // parking_lot.splice(slot_num, 1);
  // console.log(parking_lot[slot_num])
}

function status(){
  console.log("Lot    Plate              Color")
  for (car_st=0; car_st<parking_lot.length; car_st++){
    if(parking_lot[car_st].plate != ''){
    console.log(parking_lot[car_st].slot+"      "+parking_lot[car_st].plate+"      "+parking_lot[car_st].color)
    }
  };
}

function registration_numbers_for_cars_with_colour(color){
  var view_list = [];
  for (car_st=0; car_st<parking_lot.length; car_st++){
    if(parking_lot[car_st].color==color){
      view_list.push(parking_lot[car_st].plate);
    }
  }
  //stackoverflow.com/questions/49502683/how-to-return-the-array-without-the-brackets-javascript
  console.log(view_list.slice(0,view_list.length).join(', '));
}

function slot_numbers_for_cars_with_colour(color){
  var view_list = [];
  for (car_st=0; car_st<parking_lot.length; car_st++){
    if(parking_lot[car_st].color==color){
      view_list.push(parking_lot[car_st].slot);
    }
  }
  console.log(view_list.slice(0,view_list.length).join(', '));
}

function slot_number_for_registration_number(plate){
  for (car_st=0; car_st<parking_lot.length; car_st++){
    if(parking_lot[car_st].plate == plate){
      result = parking_lot[car_st].slot;
    }
    else {
      result = "Mobil Tidak Ditemukan";
    }
  }
  console.log(result);
}

function split_func(){
  for (i=0; i<list.length; i++){
    if(list[i].includes('create_parking_lot')){
      var variables = list[i].split(" ").map(function (val) {
        return String(val)
      });
      create_parking_lot(Number(variables[1]));
    }
    else if(list[i].includes('park')){
      var variables = list[i].split(" ").map(function (val) {
        return String(val)
      });
      park(String(variables[1]), String(variables[2]));
    }
    else if(list[i].includes('leave')){
      var variables = list[i].split(" ").map(function (val) {
        return String(val)
      });
      leave(Number(variables[1]));
    }
    else if(list[i].includes('status')){
      status();
    }
    else if(list[i].includes('registration_numbers_for_cars_with_colour')){
      var variables = list[i].split(" ").map(function (val) {
        return String(val)
      });
      registration_numbers_for_cars_with_colour(String(variables[1]));
    }
    else if(list[i].includes('slot_numbers_for_cars_with_colour')){
      var variables = list[i].split(" ").map(function (val) {
        return String(val)
      });
      slot_numbers_for_cars_with_colour(String(variables[1]));
    }
    else if(list[i].includes('slot_number_for_registration_number')){
      var variables = list[i].split(" ").map(function (val) {
        return String(val)
      });
      slot_number_for_registration_number(String(variables[1]));
    }
    else {
      console.log("Fungsi Tidak Ada");
    }
  }
}

initialize('file_command.txt')
split_func()
