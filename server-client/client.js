var request = require("request");
var options = {
  'method': 'POST',
  'url': 'http://192.168.1.19:2222/?name=Raspberry',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) console.log(error);
  console.log(response.body);
});
