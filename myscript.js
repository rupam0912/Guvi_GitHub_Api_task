function fetchUserData(){
    var name = document.getElementById("inputUser").value;
    const url = `https://api.github.com/users/${name}`;
    fetch(url)
    .then((response)=> {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data)=> {

            var img = document.createElement('img');        
            img.src = data.avatar_url;
            img.setAttribute("width", "304");
            img.setAttribute("height", "228");

            var tableRef = document.getElementById('myTable')
            var noOfRows = tableRef.rows.length;
            
            // Insert a row in the table at the last row
            var newRow   = tableRef.insertRow(1);
        
            // Insert a cell in the row at index 0
            var newCell1  = newRow.insertCell(0);
            var newCell2  = newRow.insertCell(1);
            var newCell3  = newRow.insertCell(2);
            var newcell4  = newRow.insertCell(3);
        
            // Append a text node to the cell
            newCell1.appendChild(img);
            newCell2.innerHTML = data.name;
            newCell3.innerHTML = data.public_repos;
            newcell4.innerHTML = `<a href=${data.html_url} target="_blank"> Click Here </a>`;
             
            if(noOfRows>2){
               tableRef.deleteRow(3);
            }

        }

    ).catch((error)=> {
        alert("No such user exist");
        console.log("Something went wrong");
    })

}
