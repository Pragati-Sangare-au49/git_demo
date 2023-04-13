const clickme1 = document.getElementById('clickme');
var res;
clickme1.addEventListener('click' , (_Event) =>{
    res = window.fetch('https://jsonplaceholder.typicode.com/todos/1')
    res.then(fulfun.rejfun)
})

function fulfun(datafetch){
    const actdata = datafetch.json();
    actdata.then((data) =>{console.log(data)})
}

function rejfun(rejdata){
    console.log("Promise rejected",rejdata);
}