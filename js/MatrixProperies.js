export function reflexivityCheck(matrix){
    for(let i = 0; i < matrix.length; i++){
      if(matrix[i][i] != 1){
        return false;
      }
    }
    return true
}

export function symmetricCheck(matrix){
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(matrix[i][j] != matrix[j][i]){
        return false
      }
    }
  }
  return true
}

export function antisymmetricCheck(matrix){
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(matrix[i][j] == 1 && matrix[j][i] == 1 && i!=j){
        return false;
      }
    }
  }
  return true
}

export function transitiveCheck(matrix){
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      for(let k = 0; k < matrix.length; k++){
        if(matrix[i][j] == 1 && matrix[j][k] == 1 && matrix[i][k] != 1){
          return false
        }
      }
    }
  }
  return true
}