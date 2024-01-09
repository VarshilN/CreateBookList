
let sub=document.getElementById('sub');
console.log(sub.type);
let list=document.querySelector('#cd');
sub.addEventListener('click',addEvent);
function addEvent(e)
{
   
    let book=document.getElementById('b').value;
    let author=document.getElementById('a').value;
    let code=document.getElementById('c').value;
    let d=document.createElement('div');
    let d1=document.createElement('div');
    let d2=document.createElement('div');
    let d3=document.createElement('div');
    d.style.backgroundColor="#ccc";
    let h1=document.createElement('h3');
    let h2=document.createElement('h3');
    let h3=document.createElement('h3');
    h1.textContent=book;
    h2.textContent=author;
    h3.textContent=code;
    d.classList.add('row');
    d1.classList.add('col-3');
    d2.classList.add('col-3');
    d3.classList.add('col-3');
    d4=document.createElement('div');
    let btn=document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('btn-danger');
    btn.classList.add('btn-sm');
    btn.classList.add('delete');
    btn.classList.add('col-1');
    btn.classList.add('mx-1');
    btn.classList.add('my-1');
    btn.style.height='2rem';
    btn.style.width='2rem';
    btn.textContent='X';
    d1.appendChild(h1);
    d2.appendChild(h2);
    d3.appendChild(h3);
    d.appendChild(d1);
    d.appendChild(d2);
    d.appendChild(d3);
    d.appendChild(btn);
    d.appendChild(d4);
    list.appendChild(d);
    btn.addEventListener('click',removeEvent);
}

function removeEvent(e)
{
    e.preventDefault();
    let item=e.target.closest('div');
    list.removeChild(item);
}
