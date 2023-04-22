function searchDoc(event) {
    event.preventDefault();
    const orgId = event.target.organisation.value;
    axios.get(`http://localhost:3000/getdoctors/${orgId}`)
    .then((response) => {
        console.log(response.data.data);
        for(let i=0;i<response.data.data.length;i++)
        {
            showDoctorsOnScreen(response.data.data[i]);
        }
        document.getElementById('organisation').value = "";
    })
    .catch(err => {
        console.log(err);
    })
}

function showDoctorsOnScreen(doctors) {
    const parentElement = document.getElementById('doctorList');
    const childHtml = `<li id=${doctors.id}>${doctors.firstname} ${doctors.lastname} - ${doctors.Email}
    </li>`
    parentElement.innerHTML += childHtml;
}