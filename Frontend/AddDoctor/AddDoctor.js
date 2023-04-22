function addDoc(event)
{
    event.preventDefault();

    const data = {
        firstName: event.target.firstname.value,
        lastName: event.target.lastname.value,
        email: event.target.email.value,
        orgName: event.target.orgname.value
    };

    axios.post(`http://localhost:3000/addDoctor`, data)
    .then((response) => {
        if (response.status == 200) {
        console.log('Doctor added successfully!');
        } else {
        console.log(err);
        }
    })
    .catch((err) => {
        console.log(err);
    })
}