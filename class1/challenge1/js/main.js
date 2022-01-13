let register = (e) => {
    e.preventDefault()
    const data = new FormData(document.getElementById('register-form'));

    const message = {
        name: data.get('first-name'),
        lastName: data.get('last-name'),
        email: data.get('email'),
      };

     console.log(data) 
     console.log(message) 

    if( (!message.name || message.name === '') ||
        (!message.lastName || message.lastName === '') ||
        (!message.email || message.email === '')){
            alert('please fill in all the fields');
    }else{
        alert(`Thanks for registering, ${message.name}`);
    }
};