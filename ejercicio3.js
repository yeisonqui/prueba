
class Empleado {
  constructor(salarioBase,nombre) {
    this.nombre= nombre;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }

  static contar(listaEmpleados) {
    return listaEmpleados.length;
  }
}



let gerente = new Empleado

 
s