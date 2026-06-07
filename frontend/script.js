fetch("http://localhost:5000/projects")
.then(response => response.json())
.then(data => {
    console.log(data);
});