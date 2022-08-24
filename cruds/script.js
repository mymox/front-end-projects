// get total
// creat product
// save localstorage
// clear inputs
// read
// count
// delete
// update
// search
// clean


let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let search = document.getElementById('search');


let mode = 'create';
let tmp;

// get total 
function getTotal(){
    // console.log('ddddddd');

    if(price.value != '' && taxes.value != '' && ads.value != ''&& discount.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML=result;
        total.style.backgroundColor='green';
    } else{
        total.innerHTML='';
        total.style.backgroundColor='red'
    }
}

function clearInputs(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    category.value='';
    count.value=''
}


// creat product

let arraypro;

if(localStorage.product != null){
    arraypro = JSON.parse(localStorage.product)
}else{
arraypro =[];}

submit.onclick= function creatProduct(){
   
    let newProduct={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        total: total.innerHTML,
        count:count.value,
        discount:discount.value,
        category:category.value

    }
    if(mode==='create'){
        
            for(i = 0;i<count.value;i++){
                arraypro.push(newProduct);} 
    }else{
            arraypro[tmp] = newProduct;
            mode='create'
            submit.innerHTML='Create'
            count.style.display='block'
        }
                // localstorage 
                localStorage.setItem('product' , JSON.stringify(arraypro));
                console.log(arraypro);
                clearInputs();
                showData();
}

// read 

function showData(){

        let table='';
        for(let i = 0; i < arraypro.length; i++){
            table += 
            `
            <tr>
                            <td>${i+1}</td>
                            <td>${arraypro[i].title}</td>
                            <td>${arraypro[i].price}</td>
                            <td>${arraypro[i].taxes}</td>
                            <td>${arraypro[i].ads}</td>
                            <td>${arraypro[i].discount}</td>
                            <td>${arraypro[i].total}</td>
                            <td>${arraypro[i].category}</td>
                            <td><button id="update" onclicK="updateData(${i})">update</button></td>
                            <td><button id="delete" onclick="deleteData(${i}) ">delete</button></td>
            </tr>
            `
        }
        document.getElementById('tbody').innerHTML = table;
    let btnclear = document.getElementById('deleteAll');
    if(arraypro.length>0){
        btnclear.innerHTML=`
        <button id="clear" onclick="clearData()" >clear data (${arraypro.length})</button>
        `
    }

    getTotal();

}
showData();

// delete

function deleteData(i){
    arraypro.splice(i,1);
    localStorage.product = JSON.stringify(arraypro);
    showData();

}

// clear data

function clearData(){
    arraypro=[];
    localStorage.product = JSON.stringify(arraypro);
    showData();

}

// update 
function updateData(i){
    title.value = arraypro[i].title;
    price.value = arraypro[i].price;
    taxes.value = arraypro[i].taxes;
    ads.value = arraypro[i].ads;
    discount.value = arraypro[i].discount;
    total.value = arraypro[i].total;
    getTotal(); 
    count.style.display='none';
    category.value = arraypro[i].category;
    submit.innerHTML='update';
    mode='update'
    tmp = i;
    scroll({
        top:0,
        behavior :'smooth'
    })

}

// search

let searchMode ='title';

function getSearchMode(id){ 
    if(id =="search-title"){
        searchMode='title';
        
    }else{
        searchMode='category'; 
        
    }
    search.placeholder='search by '+ searchMode;
    search.focus();
    search.value='';
    showData();
}

function searchData(value){
    let table='';
    if(searchMode =='title'){
        for(let i = 0 ; i < arraypro.length; i++){
            if(arraypro[i].title.toLowerCase().includes(value)){
                table += 
                `
                <tr>
                                <td>${i+1}</td>
                                <td>${arraypro[i].title}</td>
                                <td>${arraypro[i].price}</td>
                                <td>${arraypro[i].taxes}</td>
                                <td>${arraypro[i].ads}</td>
                                <td>${arraypro[i].discount}</td>
                                <td>${arraypro[i].total}</td>
                                <td>${arraypro[i].category}</td>
                                <td><button id="update" onclicK="updateData(${i})">update</button></td>
                                <td><button id="delete" onclick="deleteData(${i}) ">delete</button></td>
                </tr>
                `

                
            }
        }
    
    }
    
    else{
        for(let i = 0 ; i < arraypro.length; i++){
            if(arraypro[i].category.touLowerCase().includes(value)){
                table += 
                `
                <tr>
                                <td>${i+1}</td>
                                <td>${arraypro[i].title}</td>
                                <td>${arraypro[i].price}</td>
                                <td>${arraypro[i].taxes}</td>
                                <td>${arraypro[i].ads}</td>
                                <td>${arraypro[i].discount}</td>
                                <td>${arraypro[i].total}</td>
                                <td>${arraypro[i].category}</td>
                                <td><button id="update" onclicK="updateData(${i})">update</button></td>
                                <td><button id="delete" onclick="deleteData(${i}) ">delete</button></td>
                </tr>
                `

                
            }
        }

    }

    document.getElementById('tbody').innerHTML = table;
}

