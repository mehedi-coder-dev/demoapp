const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const list_item = document.querySelector('.list_item')

const array = [];
let indexNumber = null;

function render(){
    list_item.innerHTML = '';
    
    array.forEach((item,index)=>{
        
        //div & span & value create
        let mainDiv = document.createElement('div');
        mainDiv.classList='d-flex justify-content-between align-items-center mb-3';
        let valueItem = document.createElement('span');
        valueItem.classList='fs-5'
        valueItem.textContent = item;
   

        //buttom Create
        let buttomDiv = document.createElement('div');
        let EditeBtn = document.createElement('button');
        EditeBtn.textContent = 'Edite'
        EditeBtn.classList='btn btn-success me-1'
        EditeBtn.onclick = ()=>{
            editeItem(index)
        }
        buttomDiv.appendChild(EditeBtn)
        let DeleteBtn = document.createElement('button');
        DeleteBtn.textContent = 'Delete'
        DeleteBtn.classList='btn btn-danger'
        DeleteBtn.onclick = ()=>{
            deleteItem(index)
        }


        //append text,div, button
        buttomDiv.appendChild(DeleteBtn)
        mainDiv.appendChild(valueItem)
        mainDiv.appendChild(buttomDiv)
        list_item.append(mainDiv)
    })

}

function handleClick(){ 
    let value = input.value.trim();

    if(!value){
        alert('please enter your value!')
    }else{
        if(indexNumber != null){
          btn.textContent = 'submit'
          array[indexNumber] = value;
          indexNumber = null;
        
        }else{
            array.push(value)
        }
    }
    input.value = '';
    render()
}
function editeItem(index){
    
      input.value =  array[index];
      btn.textContent = 'update';
      indexNumber = index
      
}
function deleteItem(index){
    let conforms = confirm('are sure delete Item')
   if(conforms){
      array.splice(index,1);
      render()
   }
 

}
btn.addEventListener('click',handleClick)