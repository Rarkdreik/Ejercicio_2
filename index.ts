interface Persona {
    nombre: string;
    edad: number;
}

let array: Persona[] = [];

let btn = document.getElementById("add");
btn.addEventListener("click", (e: Event) => {
    this.add_array()
});

function add_array() {
    let persona: Persona = {
        nombre: (<HTMLInputElement>document.getElementById('nombre')).value,
        edad: parseInt((<HTMLInputElement>document.getElementById('edad')).value),
    };
    console.log('toy aqui ');
    this.array.push(persona);
}

function mostrar_array() {
    let e = document.querySelector("ul");
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }

    this.array.forEach(element => {
        let nombres: string = '';
        let edades: number = 0;

        console.log(`${element.nombre} ${element.edad}`);

        nombres = element.nombre;
        edades = element.edad;

        let node = document.createElement("li");
        node.setAttribute('id', array.indexOf(element) + '');
        node.setAttribute('class', 'flex');
        document.getElementById("lista").appendChild(node);

        let node2 = document.createElement("input");
        node2.setAttribute('type', 'text');
        node2.setAttribute('id', `${array.indexOf(element)}${nombres}`);
        node2.setAttribute('name', 'nombre');
        node2.setAttribute('value', `${nombres}`);
        document.getElementById(array.indexOf(element) + '').appendChild(node2);

        let node3 = document.createElement("input");
        node3.setAttribute('type', 'text');
        node3.setAttribute('id', `${array.indexOf(element)}${edades}`);
        node3.setAttribute('name', 'edad');
        node3.setAttribute('value', `${edades}`);
        document.getElementById(array.indexOf(element) + '').appendChild(node3);

        let node4 = document.createElement("button");
        let textnode4 = document.createTextNode('Editar');
        node4.appendChild(textnode4);
        node4.setAttribute('id', 'edit');
        node4.setAttribute('type', 'button');
        node4.setAttribute('class', 'btn btn-default');
        node4.setAttribute('onclick', `prueba(${array.indexOf(element)})`);
        document.getElementById(array.indexOf(element) + '').appendChild(node4);
    });
}

function prueba(index?: number) {
    console.log('holap');
    array[index].nombre = (<HTMLInputElement>document.getElementById(index + array[index].nombre)).value;
    array[index].edad = parseInt((<HTMLInputElement>document.getElementById(index  + '' + array[index].edad)).value);
    this.mostrar_array()
}
