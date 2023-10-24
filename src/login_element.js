import { LitElement, html, css } from "lit-element";
import loginStyle from "./login-style";
import {MenuElement1} from "./menu-element1"


export class LoginElement extends LitElement {
    constructor() {
       super();
        this.saludo="Inicio de sesión";
        this.mensaje="";
        this.usuario = ""

        const storedUsername = localStorage.getItem("Usuario");
        const storedPassword = localStorage.getItem("Contraseña");

        if (storedUsername && storedPassword) {
            this.usuario = storedUsername;
            this.contraseña = storedPassword; // Inicializa también la propiedad contraseña si es necesario
    }

    }
    static get styles() {
        return [loginStyle]
    }

    static get properties() {
        return {
            saludo: {
                type: String
            },
            mensaje: {
                type: String
            }
        }
    }

    ingresarLogin() {
        
        let username = this.shadowRoot.querySelector("#username").value;
        let password = this.shadowRoot.querySelector("#password").value;
        let check = this.shadowRoot.querySelector('#remember').checked;

        if (username == null || username == undefined || username == '') {
            this.mensaje='atencion... campo nombre vacio';
            this.mostrarError()
            return false;
        }else if (password == null || password == undefined || password == '') {
            this.mensaje='atencion... campo contraseña vacio';
            this.mostrarError()
            return false;
        }else if (check) {
            const MenuElement1 = document.createElement('menu-element');
            document.body.innerHTML = ''; 
            document.body.appendChild(MenuElement1);
             localStorage.setItem("Usuario", username)
             localStorage.setItem("Contraseña", password)
            }else{
            const MenuElement1 = document.createElement('menu-element');
            document.body.innerHTML = ''; 
            document.body.appendChild(MenuElement1);
            
        }
    }

    mostrarUsuario(){
        if (Usuario1 && Contraseña1) {
            this.usuario = Usuario1;
            this.contraseña = Contraseña1;
        }
    }

    mostrarError() {
        return html`<div>${this.mensaje}</div>`;
    }



    render() {
        return html` <style>
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        </style>
    
        <div class="container position-relative bg-secondary w-50 border border-dark rounded rounded-xxl" >
            <div class="position-absolute bottom-25 start-50 translate-middle z-index-1" ><i class="fa-solid fa-users fa-5x bg-icon p-5   rounded-circle"  style="color: #ffffff;"></i></div>
            <div class="container border border-0 border-20 px-5 py-5 bg-whiteTransparent position-relative w-100">

                <div class="mb-3 mt-5 d-flex" >
                    <span class="input-group-text bg-icon"><i class="fas fa-user" style="color: #000;"></i></span>
                    <input type="text" id="username" class="w-100 rounded form-control bg-input placeholder-white" placeholder="Usuario" .value=${this.usuario}></input>  
                </div>
                <div class="mb-3 d-flex">
                    <span class="input-group-text bg-icon"><i class="fas fa-lock" style="color: #000;"></i></span>
                    <input type="password" id="password" class="w-100 rounded form-control bg-input placeholder-white" placeholder="Password" .value=${this.contraseña}></input>
                </div>  
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input type="checkbox" name="remember" id="remember" class="form-check-input">
                        <label for="remember" class="form-check-label">Recuerdame</label>
                    </div>
                    <div class="ml-auto">
                        <span>Recuperar contraseña</span>
                    </div>
                </div>
                <div class='w-100 h-100 d-flex justify-content-center align-items-center '>
                    <div class='w-50 d-flex justify-content-center align-items-center text-danger bg-body rounded'>
                    ${this.mostrarError()}
                    </div> 
                </div>                        
            </div> 
                <button class="btn bg-secondary w-75 position-absolute start-50 translate-middle-x mt-1 w-25 bottom-rounded p-3 text-blue" @click=${(e)=>this.ingresarLogin()}><strong>LOGIN<strong></button>
               
        </div>
        `;
    }
}

customElements.define("login-element", LoginElement);

