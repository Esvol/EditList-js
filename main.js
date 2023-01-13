let text = document.getElementsByClassName('form-control');
let tbody = document.getElementById('tbody');
let addUserButton = document.querySelector('.btn-outline-success');
let info = document.querySelector('.container-info');

let userLibrary = [{}];
let index = 0;
let flag = true;
let ind = 0;
let ind2 = 0;

addUserButton.addEventListener('click', addUser);

function addUser(){
if(flag)
{
    if (/^[a-zA_Z]{4,16}$/.test(text[0].value) && /^[\w\.\-\_]{4,16}$/.test(text[1].value) && /^[\w\.\-]{1,}@\w{1,}.\w{1,}$/.test(text[2].value))
    {
        userLibrary[index] = {
            login: `${text[0].value}`,
            password: `${text[1].value}`,
            email: `${text[2].value}`
        }

        for (let i=0; i<text.length; i++)
        {
            text[i].value = '';
        }
        index++;
        tbody.innerHTML = '';

        render();
    }
}

else{
    if (/^[a-zA_Z]{4,16}$/.test(text[0].value) && /^[\w\.\-\_]{4,16}$/.test(text[1].value) && /^[\w\.\-]{1,}@\w{1,}.\w{1,}$/.test(text[2].value))
    {
        userLibrary[ind] = {
            login: `${text[0].value}`,
            password: `${text[1].value}`,
            email: `${text[2].value}`
        }

        tbody.children[ind].children[1].innerHTML = `${text[0].value}`;
        tbody.children[ind].children[2].innerHTML = `${text[1].value}`;
        tbody.children[ind].children[3].innerHTML = `${text[2].value}`;

        for (let i=0; i<text.length; i++)
        {
            text[i].value = '';
        }
        flag = true;    
        addUserButton.innerHTML = 'Add user';
    }
}

}

function render(){

for(let i=0; i<index; i++)
{
    let tr = document.createElement('tr');
    tr.id = `tr${i}`;
    tr.tagName = 'trTag';
    let th = document.createElement('th');
    th.scope = 'row';
    th.innerHTML = `${i+1}`;
    let tdLogin = document.createElement('td');
    tdLogin.innerHTML = `${userLibrary[i].login}`;
    let tdPassword = document.createElement('td');
    tdPassword.innerHTML = `${userLibrary[i].password}`;
    let tdEmail = document.createElement('td');
    tdEmail.innerHTML = `${userLibrary[i].email}`;

    let tdEditButton = document.createElement('td');
    tdEditButton.className = `${i}`;
    tdEditButton.style.width = '60px';
    let EditButton = document.createElement('input');
    EditButton.type = 'button';
    EditButton.value = 'Edit';
    EditButton.className = 'btn btn-warning';
    tdEditButton.append(EditButton);
    let tdDeleteButton = document.createElement('td');
    tdDeleteButton.className = `${i}`;
    let DeleteButton = document.createElement('input');
    DeleteButton.type = 'button';
    DeleteButton.value = 'Delete';
    DeleteButton.className = 'btn btn-danger';
    tdDeleteButton.append(DeleteButton);

    tr.append(th);
    tr.append(tdLogin);
    tr.append(tdPassword);
    tr.append(tdEmail);
    tr.append(tdEditButton);
    tr.append(tdDeleteButton);

    tbody.append(tr);
}
}

info.addEventListener('click', function(e){
    if (e.target.type == 'button' && e.target.className == 'btn btn-warning')
    {
        ind = e.target.parentNode.className;
        text[0].value = userLibrary[ind].login;
        text[1].value = userLibrary[ind].password;
        text[2].value = userLibrary[ind].email;
        flag = false;
        addUserButton.innerHTML = 'Edit user';
    }
    if (e.target.type == 'button' && e.target.className == 'btn btn-danger')
    {
        ind2 = e.target.parentNode.className;
        userLibrary.splice(ind2,1);
        index--;
        tbody.innerHTML = '';
        render();
    }
})

