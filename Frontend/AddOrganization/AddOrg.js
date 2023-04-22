function addOrg(event){
    event.preventDefault();
    const data = {
        name: event.target.name.value,
        address: event.target.address.value
    };
    axios.post('http://localhost:3000/addOrg', data)
    .then((response) => {
        console.log(response);
        if(response.status == 200)
        {
            alert('Organization created successfully!');
            document.getElementById('name').value = "";
            document.getElementById('address').value = "";
        };
    })
    .catch(err => {
        console.log(err);
    })
}

window.addEventListener('DOMContentLoaded', async(event) => {
    await axios.get('http://localhost:3000/getAllOrg')
    .then((response) => {
        const organizations = response.data.organizations;
        // console.log(organizations);
        const parentEle = document.getElementById('OrgList');
        for(let i=0;i<organizations.length;i++)
        {
            const childEle = `<li id="${organizations[i].id}">${organizations[i].id}.   ${organizations[i].name}, ${organizations[i].address}
            <button onclick="editOrg(${organizations[i].id})">Edit Org</button>
            <button onclick="deleteOrg(${organizations[i].id})">Delete Org</button>
            </li>`;
            parentEle.innerHTML += childEle;
        }
    })
    .catch((err) => {
        console.log(err);
    })
})

async function editOrg(orgId) {
    const name = prompt("Enter new name");
    const address = prompt("Enter new address");
    if (name !== null && address !== null) {
        const data = {
            name: name,
            address: address
        }
        await axios.put(`http://localhost:3000/editOrg/${orgId}`, data)
        .then((response) => {
            alert(response.data.message);
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
