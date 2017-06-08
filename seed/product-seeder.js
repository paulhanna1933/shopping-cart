var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: "https://farm4.staticflickr.com/3421/3237632974_72eaf4d562.jpg",
    title: "Wholesale lot of 50 Dell PowerEdge Servers",
    description: "Bacon ipsum dolor amet short ribs venison shoulder jowl. Andouille venison tenderloin meatball chicken porchetta. Cow kielbasa andouille shank, shoulder frankfurter sausage pancetta rump prosciutto corned beef spare ribs porchetta swine.",
    price: 500
  }),
  new Product({
    imagePath: "https://farm1.staticflickr.com/91/249141628_5c3d119af3.jpg",
    title: "Wholesale lot of Cisco Switches",
    description: "Bacon ipsum dolor amet short ribs venison shoulder jowl. Andouille venison tenderloin meatball chicken porchetta. Cow kielbasa andouille shank, shoulder frankfurter sausage pancetta rump prosciutto corned beef spare ribs porchetta swine.",
    price: 300
  }),
  new Product({
    imagePath: "https://farm1.staticflickr.com/50/162761664_fbb7af3561.jpg",
    title: "Wholesale lot of of 10 Thinkpad Laptops",
    description: "Bacon ipsum dolor amet short ribs venison shoulder jowl. Andouille venison tenderloin meatball chicken porchetta. Cow kielbasa andouille shank, shoulder frankfurter sausage pancetta rump prosciutto corned beef spare ribs porchetta swine.",
    price: 250
  })
];

var done = 0;
for (var i = 0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
