import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WoloxServiceService } from '../services/wolox-service.service';
import { User } from '../services/wolox-model';
import { Router } from '@angular/router';
import { Component,  OnInit} from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {  
  signUp : any = localStorage.getItem("SignUp"); 
  //validations
  public RegistroForm : FormGroup;
  error: string;
  woloxModel_User: User;
  get txtNombre() { return this.RegistroForm.get('txtNombre'); } 
  get txtApellido() { return this.RegistroForm.get('txtApellido'); } 
  get selPais() { return this.RegistroForm.get('selPais'); } 
  get txtCorreo() { return this.RegistroForm.get('txtCorreo'); } 
  get txtTelefono() { return this.RegistroForm.get('txtTelefono'); }   
  get txtContrasena() { return this.RegistroForm.get('txtContrasena'); } 
  get txtContrasena2() { return this.RegistroForm.get('txtContrasena2'); }       

  constructor(private formBuilder: FormBuilder, private woloxService:WoloxServiceService,private router: Router) {     
    localStorage.setItem("SignUp","0");    
    if(this.signUp =="1"){
      this.router.navigate(['listado']);        
    }
   }

   private buildForm(){
    return this.RegistroForm = this.formBuilder.group({
      txtNombre: ['', [Validators.required,Validators.maxLength(30)]],
      txtApellido: ['', [Validators.required,Validators.maxLength(30)]],
      selPais: ['', [Validators.required]],
      txtCorreo: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),Validators.maxLength(50)]],
      txtTelefono: ['', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.maxLength(10)]],
      txtContrasena: ['', [Validators.required]],
      txtContrasena2: ['', [Validators.required]],
   })
  }

  Registrar(e){
    if (this.RegistroForm.invalid) {      
       return;
    }
    this.woloxModel_User = new User();
    this.woloxModel_User.name = this.RegistroForm.get('txtNombre').value; 
    this.woloxModel_User.last_name = this.RegistroForm.get('txtApellido').value; 
    this.woloxModel_User.country = this.RegistroForm.get('selPais').value; 
    this.woloxModel_User.province = this.RegistroForm.get('selPais').value; 
    this.woloxModel_User.mail = this.RegistroForm.get('txtCorreo').value; 
    this.woloxModel_User.phone = this.RegistroForm.get('txtTelefono').value; 
    this.woloxModel_User.password = this.RegistroForm.get('txtContrasena').value;     
    //POST SIGNUP
    this.woloxService.submitSignUp(this.woloxModel_User)
        .subscribe (
          signUp=>
          {             
            alert('Registro exitoso con token: ' + signUp.toString());              
            setTimeout(function(){        
              
            }, 2000);       
            localStorage.setItem("SignUp","1")                
            this.router.navigate(['/']);                    
          },
      err => {
            this.error = 'An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}';
          }
        ); 
  }

  ngOnInit() {
    this.RegistroForm = this.buildForm(); 
    //GET DE PAISES
    this.woloxService.getPaises()
        .subscribe (
          dataS=>
          { 
            dataS.splice([0],1);            
          },
          err => {
            this.error = 'An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}';
          }
        ); 
  }

}
