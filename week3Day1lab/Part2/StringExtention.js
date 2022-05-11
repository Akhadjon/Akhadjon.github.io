String.prototype.filter=function(word){
    return this.replace(word, '');
  };


console.log(  "Hello wordl".filter("Hello"));