import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      c => this.clientes = c
    );
  }

  deleteCliente(cliente: Cliente): void {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podrás revertir este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar registo"
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteCliente(cliente.id).subscribe(
          (response) => {
              this.clientes = this.clientes.filter(c => c !== cliente),
              Swal.fire({
                title: "Eliminado!",
                text: "El cliente ha sido eliminado con exito",
                icon: "success"
              });
          }
        )
      }
    });


  }

}
