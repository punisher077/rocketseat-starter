import api from './api';

class App {
    constructor() {
        this.repos = [];
        this.formEl = document.querySelector("#repo-form");
        this.ulEl = document.querySelector("#repo-list");
        this.inputElement = document.querySelector("#repo-form input");
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if(loading){
            let loadEl = document.createElement('span');
            loadEl.appendChild(document.createTextNode('Carregando...'));
            loadEl.id = 'loadSpan';
            this.formEl.appendChild(loadEl);
        }else{
            document.getElementById('loadSpan').remove();
        }
    }
    render() {
        this.ulEl.innerHTML = "";
        this.repos.forEach((repo) => {
            let liEl = document.createElement('li');

            let imgEl = document.createElement('img');
            imgEl.src = repo.avatar_url;
            liEl.appendChild(imgEl);

            let strongEl = document.createElement('strong');
            strongEl.appendChild(document.createTextNode(repo.name));

            liEl.appendChild(strongEl);
            let pEl = document.createElement('p');
            pEl.appendChild(document.createTextNode(repo.description));
            liEl.appendChild(pEl);

            let aEl = document.createElement('a');
            aEl.href = repo.html_url;
            aEl.appendChild(document.createTextNode("Acessar"));
            liEl.appendChild(aEl);

            this.ulEl.appendChild(liEl);
        });
    }
    async addRepository(event) {
        event.preventDefault();
        const repoName = this.inputElement.value;
        this.setLoading();
        this.inputElement.value = "";
        console.log(repoName);
        if (repoName.length === 0) {
            return;
        }
        try {
            const response = await api.get(`/repos/${repoName}`);
            const {name, description, html_url, owner: {avatar_url}} = response.data;
 
            console.log(response);
            this.repos.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            console.log(this.repos);
            this.render();
        }
        catch (err) {
            alert("Repositorio não encontrado!");
        }
        this.setLoading(false);


    }

}

new App();