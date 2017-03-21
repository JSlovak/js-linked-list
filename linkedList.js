/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
  var listOfNodes = {};
  var node = {};
  var head = null;
  var tail = null;



  function getHead(){
   return head;
  }

  function getTail(){
   return tail;
  }

  function add(value){
    if (head === null){

      tail = {
        value: value,
        next: null,
      };
      head = tail;
      return tail;

    } else {
      tail.next = {
        value: value,
        next: null
      };
      tail = tail.next;
    }
    return tail;
  }

  function get(number){
    var currNode = head;

    for (var i = 0; i < number; i++){
      if (currNode === null){
        return false;
      }
        currNode = currNode.next;
    }

    if (currNode === null){
      return false;

    } else {
        return currNode;
      }
  }

  function remove(Number){

  }

  function insert(Value, Number) {

  }

  return {
    getHead:getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert

  };

}


