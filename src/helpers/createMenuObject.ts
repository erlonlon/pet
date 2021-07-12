type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'
export const createMenuObject = (acitveMenu: MenuOptions) =>{

  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }
  if(acitveMenu !== ''){
    returnObject[acitveMenu] = true
  }

  return  returnObject
}