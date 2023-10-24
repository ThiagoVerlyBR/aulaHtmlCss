function enviaEmail() {
    const emailVar = document.getElementById("email");
    console.log("Enviado", emailVar.value);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    const body = JSON.stringify({
        email: emailVar;
    });
    
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.log(`Error: ${xhr.status}`);
    }
    };
    xhr.send(body);
}