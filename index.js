const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastName");
const inputNumber= document.getElementById("number");
const form= document.getElementById("form");
const tbody = document.getElementById("tbody")

let data = []


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = e.target.name.value;
    let lastName = e.target.lastName.value;
    let number = e.target.number.value;
    data.push({name:name,lastName:lastName,number:number})
    tabelDisplay()
})


const tabelDisplay = () => {
    tbody.innerHTML = ""
    data.map((value,index) =>{
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdLastName = document.createElement('td');
        let tdNumber = document.createElement('td');
        let tdDeleteButton = document.createElement('button');
        let tdEditButton = document.createElement('button');
        let tdId = document.createElement('input');

        tdDeleteButton.textContent = "Delete";
        tdEditButton.textContent = "Edit";
        tdName.textContent = value.name
        tdLastName.textContent = value.lastName
        tdNumber.textContent = value.number
        tdId.type = "hidden"
        tdId.value = index
        
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdNumber)
        tr.appendChild(tdDeleteButton)
        tr.appendChild(tdId)
        tr.appendChild(tdEditButton)

        tbody.appendChild(tr)

        tdDeleteButton.addEventListener("click", (e)=>{
            let tr = e.target.parentElement;
            let id = parseInt(tr.querySelector('input').value)
            data = data.filter((value, index)=>{
                console.log(index,id)
                return index !== id;
            }) 
            console.log(data)
            tabelDisplay()
        })
        
    })
}