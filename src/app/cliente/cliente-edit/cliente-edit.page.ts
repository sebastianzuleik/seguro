import { Component, OnInit } from '@angular/core';
import { collection, addDoc, updateDoc, getDoc, Firestore, doc, } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.page.html',
  styleUrls: ['./cliente-edit.page.scss'],
})
export class ClienteEditPage implements OnInit {

  id: any;
  cliente: any = [];
  constructor(
    private readonly firestore: Firestore,
    private route: ActivatedRoute,
    private rt: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      //console.log('params', params);
      this.id = params.id;
      //console.log('id', this.id);
      if (this.id) {
        this.obtenerCliente(this.id);
      }

    });
  }

  volver = () => {
    this.rt.navigate(['/cliente-list']);


  }
  accion = (id: string) => {
    if (this.id) {
      //console.log("modificar");
      this.editarCliente(this.id);
    
    } else {
      //console.log("guardar");
      this.incluirCliente();

    }
    this.volver();
  }

  incluirCliente = () => {
    console.log('aqui incluir en firebase');
    let alumnaRef = collection(this.firestore, 'cliente');

    addDoc(
      alumnaRef,
      {
        codigo: (this.cliente.codigo)?(this.cliente.codigo):0,
        nombre: (this.cliente.nombre)?(this.cliente.nombre):"",
        apellido: (this.cliente.apellido)?(this.cliente.apellido):"",
        bienAsegurado: (this.cliente.bienAsegurado)?(this.cliente.bienAsegurado):"",
        montoAsegurado: (this.cliente.montoAsegurado)?(this.cliente.montoAsegurado):"",
        nacimiento: (this.cliente.nacimiento)?(new Date(this.cliente.nacimiento)):new Date(),
        activo: (this.cliente.activo)?(this.cliente.activo):false,
      }

    ).then(doc => {
      console.log('registro incluido');
      this.volver();

    }
    );
  }

  editarCliente = (id: string) => {
    console.log('aqui editar en firebase');
    const document = doc(this.firestore, 'cliente', this.id);

    updateDoc(
      document,
      {
        codigo: (this.cliente.codigo)?(this.cliente.codigo):0,
        nombre: (this.cliente.nombre)?(this.cliente.nombre):"",
        apellido: (this.cliente.apellido)?(this.cliente.apellido):"",
        bienAsegurado: (this.cliente.bienAsegurado)?(this.cliente.bienAsegurado):"",
        montoAsegurado: (this.cliente.montoAsegurado)?(this.cliente.montoAsegurado):"",
        nacimiento: (this.cliente.nacimiento)?(new Date(this.cliente.nacimiento)):new Date(),
        activo: (this.cliente.activo)?(this.cliente.activo):false,
      }

    ).then(doc => {
      console.log('registro editado');
      this.volver();

    }
    );
  }

  obtenerCliente = (id: string) => {

    const document = doc(this.firestore, 'cliente', id);

    

    getDoc(document).then(doc => {
      console.log('registro a editar', doc.data());
      this.cliente = doc.data();
      const timestamp = this.cliente.nacimiento; // Asume que 'fecha' es el campo Timestamp
      this.cliente.nacimiento = timestamp.toDate().toISOString(); // Convierte a ISO 8601
      
    }
    );
  }
  

}
