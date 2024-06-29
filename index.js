
function submitData(name, email) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch("http://localhost:3000/users", configuration)
        .then(response => response.json())
        .then(data => {
            let p = document.createElement("p");
            p.textContent = data.id;
            document.querySelector("body")
                .append(p);
        })
        .catch(error => {
            let p = document.createElement("p");
            p.textContent = error.message;
            document.querySelector("body")
                .append(p);
        });
}