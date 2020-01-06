// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/punisher077');
// xhr.send(null);

// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }





//Q1
function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (idade > 18) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}
checaIdade(17)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });



//Q2

var inputElement = document.querySelector("#q2 input");
var btnElement = document.querySelector("#q2 button");
var ulElement = document.querySelector("#q2 ul");



btnElement.onclick = function () {
    ulElement.innerHTML = "";
    var name = inputElement.value;
    ulElement.appendChild(document.createElement("li").appendChild(document.createTextNode("Loading...")));
    axios.get(`https://api.github.com/users/${name}/repos`).
        then(function (response) {
            ulElement.innerHTML = "";
            var repos = response.data;
            for (repo of repos) {
                var listItem = document.createElement("li");
                listItem.appendChild(document.createTextNode(repo.name));
                ulElement.appendChild(listItem);
            }
        }).
        catch(function (error) {
            ulElement.innerHTML = "";
            var errorElement = document.createElement("li");
            console.warn(error);
            errorElement.appendChild(document.createTextNode("ERROR 404"));
            ulElement.appendChild(errorElement);
        });
};