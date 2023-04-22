function searchDoc(event) {
    event.preventDefault();
    axios.get(`http://localhost:3000/getdoctors/${event.target.organisation.value}`)
    .then((response) => {
        console.log(response.doctors);
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