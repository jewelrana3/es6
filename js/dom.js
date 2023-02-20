document.getElementById('background').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friended');
    for(const bondhu of friends){
        bondhu.style.backgroundColor = 'red';
    }
});

document.getElementById('two').addEventListener('click',function(){
    const twoColor = document.getElementById('two-color');
    twoColor.style.textAlign='center';
});

document.getElementById('new-btn').addEventListener('click',function(){
    const containerDiv = document.getElementById('frends');
    const addBtn = document.createElement('div');
    addBtn.innerHTML=`
    <h3>add a new freinds</h3>
    <p>this is a frends sercircle</p>
    `
    containerDiv.appendChild(addBtn)
})
