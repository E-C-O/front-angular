import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ngOnInit() {
  }

  title = 'Angular Form Validation';
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      tel: ['', Validators.required],
      senha: ['', Validators.required],
      address: ['', Validators.required]
    });
  }




  senha1 : string;
  senha2 : string;

  compara() {
    if(this.senha1 != this.senha2){
      document.getElementById("senhaNãoConferem").style.visibility = "visible";
    }
    else{
      document.getElementById("senhaNãoConferem").style.display = "none";
    }
  }


  

}
