console.log("my script is loaded");

const addClick = document.getElementById('add-button');

var category = document.getElementsByClassName("category");
var dueDate = document.getElementsByClassName("date");

console.log(category[0].innerHTML);

for(let cat of category){
    if(cat.innerHTML === "Work"){
        cat.classList.add('work-class');
    }
    if(cat.innerHTML === "Personal"){
        cat.classList.add('personal-class');
    }
    if(cat.innerHTML === "Cleaning"){
        cat.classList.add('cleaning-class');
    }
    if(cat.innerHTML === "School"){
        cat.classList.add('school-class');
    }
    if(cat.innerHTML ===  "Others"){
        cat.classList.add('others-class')
    }
}
for(date of dueDate){
    if(date.innerText === ""){
        var str1 = '<i class="far fa-calendar-alt"></i>';
        var str2 = 'No Deadline';
        var str3 = str1.concat(str2);
        // date.innerHTMl ='<i class="far fa-calendar-alt"></i>', 'No deadline';
        console.log(date);
        date.innerHTML = str3;
    }
}

