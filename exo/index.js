let nav1 = document.getElementById("click1");
let nav2 = document.getElementById("click2");
let nav3 = document.getElementById("click3");
let nav4 = document.getElementById("click4");

let menu1 = document.querySelector(".submenu1");
let menu2 = document.querySelector(".submenu2");
let menu3 = document.querySelector(".submenu3");
let menu4 = document.querySelector(".submenu4");
let menu5 = document.querySelector(".submenu5");
let menu6 = document.querySelector(".submenu6");

function exercice1()
{
    nav1.addEventListener("click", function(event){
        
        if (menu1.classList.contains("close")) {
            
            menu1.classList.remove("close");
            menu1.classList.add("open");
        }
        else if (menu1.classList.contains("open")) {
            
            menu1.classList.remove("open");
            menu1.classList.add("close");
        }
        
});
    nav2.addEventListener("click", function(event){
        
        if (menu2.classList.contains("close")) {
            
            menu2.classList.remove("close");
            menu2.classList.add("open");
        }
        else if (menu2.classList.contains("open")) {
            
            menu2.classList.remove("open");
            menu2.classList.add("close");
        }
    });
    nav3.addEventListener("click", function(event){
        
        if (menu3.classList.contains("close")) {
            
            menu3.classList.remove("close");
            menu3.classList.add("open");
        }
        else if (menu3.classList.contains("open")) {
            
            menu3.classList.remove("open");
            menu3.classList.add("close");
        }
    });
    
    nav4.addEventListener("click", function(event){
        
        if (menu4.classList.contains("close")) {
            
            menu4.classList.remove("close");
            menu4.classList.add("open2");
            menu5.classList.remove("close");
            menu5.classList.add("open2");
            menu6.classList.remove("close");
            menu6.classList.add("open2");
        }
        else if (menu4.classList.contains("open2")) {
            
            menu4.classList.remove("open2");
            menu4.classList.add("close");
            menu5.classList.remove("open2");
            menu5.classList.add("close");
            menu6.classList.remove("open2");
            menu6.classList.add("close");
        }
        
});
}


    let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];
    let tab1= document.querySelector("tab1");
    
    
            for(let i = 0; i < users.length; i++)
            {
                if (users[i].isActive=== false)
                {
                   let span= document.createElement("span");
                   span.classList.add("bi-person-fill-down");
                   let td = document.createElement("td");
                   
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let tr = document.createElement("tr");
                    let txt = document.createTextNode(users[i].id);
                    let txt2 = document.createTextNode(users[i].name);
                    let txt3 = document.createTextNode(users[i].age);
                    
                    let td5 = document.createElement("td");
                    let a2 = document.createElement("a");
                    let span2= document.createElement("span");
                    span2.classList.add("bi-eye");
                    
                    let a3 = document.createElement("a");
                    let span3= document.createElement("span");
                    span3.classList.add("bi-pen");
                    let button4= document.createElement("button");
                    let span4= document.createElement("span");
                    span4.classList.add("bi-trash3");
                    
                    let tab1 = document.querySelector(".tab1");
                    a2.appendChild(span2);
                    td5.appendChild(a2);
                    a3.appendChild(span3);
                    td5.appendChild(a3);
                    button4.appendChild(span4);
                    td5.appendChild(button4);
                    
                    td.appendChild(txt);
                    td2.appendChild(txt2);
                    td3.appendChild(txt3);
                    td4.appendChild(span);
                    tr.appendChild(td);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tab1.appendChild(tr);
                    
                }
                else if (users[i].isActive=== true)
                {
                   let span= document.createElement("span");
                   span.classList.add("bi-person-fill-up");
                   let td = document.createElement("td");
                   
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let tr = document.createElement("tr");
                    let txt = document.createTextNode(users[i].id);
                    let txt2 = document.createTextNode(users[i].name);
                    let txt3 = document.createTextNode(users[i].age);
                     let td5 = document.createElement("td");
                    let a2 = document.createElement("a");
                    let span2= document.createElement("span");
                    span2.classList.add("bi-eye");
                    
                    let a3 = document.createElement("a");
                    let span3= document.createElement("span");
                    span3.classList.add("bi-pen");
                    let button4= document.createElement("button");
                    let span4= document.createElement("span");
                    span4.classList.add("bi-trash3");
                    
                    let tab1 = document.querySelector(".tab1");
                    a2.appendChild(span2);
                    td5.appendChild(a2);
                    a3.appendChild(span3);
                    td5.appendChild(a3);
                    button4.appendChild(span4);
                    td5.appendChild(button4);
                    td.appendChild(txt);
                    td2.appendChild(txt2);
                    td3.appendChild(txt3);
                    td4.appendChild(span);
                    tr.appendChild(td);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tab1.appendChild(tr);
                }
         
            }     
        



 
    let nav7 = document.querySelector(".bi-trash3");
    let nav8 = document.querySelector(".cancel-btn");
    
    let menu7 = document.getElementById("pop-up");
    let menu8 = document.querySelector(".submenu6");
    
    nav7.addEventListener("click", function(event){
        
        if (menu7.classList.contains("close3")) {
            
            menu7.classList.remove("close3");
            menu7.classList.add("open3");
            menu8.classList.remove("open3");
            menu8.classList.add("clause3");
            
        }
    });
    
    nav8.addEventListener("click", function(event){
        if (menu7.classList.contains("open3")) {
            
            menu7.classList.remove("open3");
            menu7.classList.add("close3");
            menu8.classList.remove("clause3");
            menu8.classList.add("open3");
        }
        
    });
    for(let i = 0; i < users.length; i++)
            {
                
            }



window.addEventListener("DOMContentLoaded", function(){
    // tout le reste de mon script


exercice1();
});