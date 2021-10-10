function median(array){
  if(array.length%2 != 0){
    var a = array;
    a = a.sort();
    var medianIndex = (a.length()-1)/2;
    var medianVal = a[medianIndex];
    return medianVal;
  }
  else{
    return null;
  }
}
