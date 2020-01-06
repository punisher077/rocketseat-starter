// Q1

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//Q2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(({ idade }) => idade);
console.log(idades);

const rocketseat = usuarios.filter((user) => user.empresa == "Rocketseat" && user.idade > 18);
console.log(rocketseat);

const google = usuarios.find((user) => user.empresa == "Google");
console.log(google);

const usersMeiaIdade = usuarios.map((user) => ({ ...user, idade: user.idade * 2 })).filter(({ idade }) => idade <= 50);
console.log(usersMeiaIdade);

//Q3

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map((item) => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;

mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome));
console.log(mostraUsuario(nome, idade));


// 3.4
const promise = () =>
    new Promise((resolve, reject) => {
        return resolve();
    });

//Q4

const empresa = {
    nomee: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nomee, endereco: { cidade, estado } } = empresa;
console.log(nomee); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}


mostraInfo({ nome: 'Diego', idade: 23 });

// Q5

const arr2 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


// function soma...
function soma(...params) {
    return params.reduce((total, current) => total + current);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//Spread
const usuario2 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario3 = {
    ...usuario2,
    nome: "Gabriel"
};

const usuario4 = {
    ...usuario2,
    endereco: {
        ...usuario2.endereco,
        cidade: "Lontra"
    }
};

console.log(usuario4);


// Q6

const usuario5 = 'Diego';
const idade2 = 23;
console.log(`O usuário ${usuario5} possui ${idade2} anos`);

// Q7

const nome3 = 'Diego';
const idade3 = 23;
const usuario7 = {
    nome3,
    idade3,
    cidade: 'Rio do Sul',
};