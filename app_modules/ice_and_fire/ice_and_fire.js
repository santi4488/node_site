var if_url = require('../api_config/api_config.json').api_urls.ice_and_fire;
var asoiaf = require('asoiaf-api');

var getCharacter = function(params){
  return new Promise(function(resolve, reject){
    var obj = {
      success: false,
      data: [],
      msg: '',
    };
    if(params.type == 'name'){
      obj.data = asoiaf.getCharacterByName(params.search);
    }
    else if(params.type == 'id'){
      obj.data = asoiaf.getCharacterByID(params.search);
    }
    else if(params.type == 'culture'){
      obj.data = asoiaf.getCharacterByCulture(params.search);
    }
    else if(params.type == 'gender'){
      obj.data = asoiaf.getCharacterByGender(params.search);
    }
    else if(params.type == 'all'){
      obj.data = asoiaf.getAllCharacters(params.search);
    }
    else{
      reject('Invalid type');
    }

    if(obj.data.length > 0){
      obj.success = true;
    }
    else{
      obj.msg = 'No results found';
    }

    resolve(obj);

  });
};

var getHouses = function(params){
  return new Promise(function(resolve, reject){
    var obj = {
      success: false,
      data: [],
      msg: '',
    };

    if(params.type == 'id'){
      obj.data = asoiaf.getHouseByID(params.search);
    }
    else if(params.type == 'name'){
      obj.data = asoiaf.getHouseByName(params.search);
    }
    else if(params.type == 'region'){
      obj.data = asoiaf.getHouseByRegion(params.search);
    }
    else if(params.type == 'words'){
      obj.data = asoiaf.getHouseByWords(params.search);
    }
    else if(params.type == 'all'){
      obj.data = asoiaf.getHouseByID(params.search);
    }
    else{
      reject('Invalid type');
    }

    if(obj.data.length > 0){
      obj.success = true;
    }
    else{
      obj.msg = 'No results found';
    }

    resolve(obj);
  });
};

var getBooks = function(params){
  return new Promise(function(resolve, reject){
    var obj = {
      success: false,
      data: [],
      msg: '',
    };

    if(params.type == 'id'){
      obj.data = asoiaf.getHouseByID(params.search);
    }
    else if(params.type == 'name'){
      obj.data = asoiaf.getHouseByName(params.search);
    }
    else if(params.type == 'all'){
      obj.data = asoiaf.getHouseByName(params.search);
    }
    else{
      reject("Invalid type");
    }

    if(obj.data.length > 0){
      obj.success = true;
    }
    else{
      obj.msg = 'No results found';
    }

    resolve(obj);
  });
};

var getFun = function(params){
  return new Promise(function(resolve, reject){
    var obj = {
      success: false,
      data: [],
      msg: '',
    };

    if(params.type == 'character'){
      obj.data = asoaif.getRandomCharacter();
    }
    else if(params.type == 'house'){
      obj.data = asoaif.getRandomHouse();
    }
    else if(params.type == 'character_house'){
      obj.data = asoaif.getRandomCharacterOfHouse(params.search);
    }
    else{
      reject('Invalid Type');
    }

    if(obj.data.length > 0){
      obj.success = true;
    }
    else{
      obj.msg = 'No results found';
    }

    resolve(obj);

  });
};

module.exports = {
  characters: getCharacter,
  houses: getHouses,
  books: getBooks,
  fun: getFun,
};
