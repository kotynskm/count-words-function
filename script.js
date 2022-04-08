function countWords(stringOfWords) {
    // if input is an empty string return an empty object
    if(stringOfWords === ""){
      return {};
    }
    // initialize count object
    let counts = {};
    // split string in an array
    let wordsArray = stringOfWords.split(" ");
    // iterate over array
    for(let i = 0; i < wordsArray.length; i ++){
      let currentWord = wordsArray[i];
      // if object at current key is undefined, add it to the counts object
      if(counts[currentWord] === undefined){
        counts[currentWord] = 1;
        // else increment the count
      }else{
        counts[currentWord]++
      }
    }
    return counts;
  }
  
  var result1 = countWords('ask a bunch get a bunch');
  console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);
  
  var result2 = countWords('');
  console.log('should log "{}":', result2);