import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../../services/empresa.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {
  message: string;
  errors: any;
  userEmail: string;
  userNombres: string;
  userApellidoP: string;
  userApellidoM: string;
  userRut: string;
  userCelular: string;
  userFono: string;
  empresaNombre: string;
  empresaRazonSocial: string;
  empresaRut: string;
  empresaDireccion: string;
  empresaCuentaPago: string;
  constructor(private empresaService: EmpresaService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit() {
  }

  createEmpresa() {
    this.message = 'Cargando...';
    this.spinner.show();
    this.empresaService.createEmpresa(this.userEmail, this.userNombres, this.userApellidoP, this.userApellidoM, this.userRut,
      this.userCelular, this.userFono, this.empresaNombre, this.empresaRazonSocial, this.empresaRut, this.empresaDireccion,
      this.empresaCuentaPago).subscribe(
        res => this.success(res),
        res => this.handleError(res));
  }
  success(res) {
    this.message = res.message;
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigateByUrl('/sysadmin/empresas/list');
    }, 5000);
  }
  handleError(res) {
    this.message = 'Empresa no pudo ser ingresada al sistena';
    this.spinner.hide();
  }

}
