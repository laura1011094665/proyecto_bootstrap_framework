import { LitElement, html, css } from "lit-element";
import loginStyle from "./login-style";
export class MenuElement2 extends LitElement {
    static get styles() {
        return [loginStyle]
    }
    render() {
        return html`
        <style>
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
    </style>
    <div class='vw-100 vh-100 d-flex bg-coulor '>
        <div class="cont bg-secondary w-25 m-3 p-3 border border-20 rounded rounded-xxl">
            <div class='row align-items-center'>
                <div class='d-flex mt-2'>
                    <button class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue"> <i class="fa-solid fa-user-plus fa-beat"> </i><strong>Usuario</strong></button>
                </div>
                <div class='d-flex mt-2'>
                    <button class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue" @click=${(e)=>this.ingresarMainPage2()}> <i class="fa-solid fa-bullhorn fa-flip"> </i><strong>Campañas</strong></button><br>
                </div>
                <div class='d-flex mt-2 ml-2'>
                    <button class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue"> <i class="fa-solid fa-users fa-bounce"></i> <strong>Equipos<strong></button><br>
                </div>
            </div>
        </div>
        <div class='flex-container w-100 h-100 d-flex justify-content-center align-items-center'>
            <div class='bg-otro rounded w-75 d-flex flex-column m-3'>
                <div class='container d-flex justify-content-center align-items-center h-100 w-100'>
                    <div class='h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-dark texto'> 10 m</p>
                    </div>
                    <div class='bg-color h-50 rounded w-100  bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-white fs-letra'>Tiempo<br>Llamadas</p>
                    </div>
                </div>
            </div>
            <div class='bg-otro rounded w-75 d-flex flex-column m-3'>
                <div class='container d-flex justify-content-center align-items-center h-100 w-100'>
                    <div class='h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-dark texto'> 10 m</p>
                    </div>
                    <div class='bg-color h-50 rounded w-75  bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-white fs-letra'>Tiempo<br>Llamadas actual</p>
                    </div>
                </div>
            </div>
            <div class='bg-otro rounded w-75 d-flex flex-column m-3'>
                <div class='container d-flex justify-content-center align-items-center h-100 w-100'>
                    <div class='h-50 w-25 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-dark fs-letra texto'>campaña <br>1</p>
                    </div>
                    <div class='bg-color h-50 rounded w-75  bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-white fs-letra'>campañas <br>activas</p>
                    </div>
                </div>
            </div>
            
        </div> 
        <div class="w-75 p-3">
            <div class="formulario w-15 m-3 h-25 rounded ">
                <form @submit=${this.ingresarLogin}>
                    <div class="d-flex p-3 w-100">
                        <input class="form-control" placeholder="Número"/>
                    </div>
                    <div class="w-100 d-flex p-3">
                        <input class="form-control" placeholder="Nombre"/>
                    </div>
                        <button type="submit" class="btn btn-dark d-flex m-3">Buscar</button>
                </form>
            </div>
            <div  class='cont w-100 h-100 rounded'>
                <div class=" d-flex justify-content-between mt-3">
                    <button class="btn btn-dark d-flex m-3">Datos de llamadas</button>
                    <button id="botonAbrirModal" class="btn btn-dark d-flex m-3" @click="${this.abrirModal}">10:00:00 </button>
                        <div id="miModal" class="modal">
                            <div class="modal-dialog">
                            <div class="modal-content h-50 d-flex justify-content-center aling-item-center">
                                <button class='color  bg-transparent border-0' @click="${this.cerrarModal}">X</button>
                                <div>
                                    <label>Identificación de Usuario:</label>
                                    <input type="text" .value="${this.identifi}" @input="${(e) => (this.identifi = e.target.value)}" /><br />
                                    <label>Nombre de Usuario:</label>
                                    <input type="text" .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}" /><br /> <label>Campaña de Usuario:</label> <input type="text" .value="${this.campana}" @input="${(e) => (this.campana = e.target.value)}" /><br />
                                    <label>Estado de Usuario:</label>
                                    <input type="text" .value="${this.estado}" @input="${(e) => (this.estado = e.target.value)}" /><br /> <label>Teléfono de Usuario:</label> <input type="text" .value="${this.tel}"  @input="${(e) => (this.tel = e.target.value)}" ><br>
                                    <button @click="${this.registrarUsuario}">Registrar</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
                <div class="mt-3 mb-2 m-3" style="border: 1px solid #ccc; padding: 10px;">
                <div class="bg-color-secondary1 d-flex justify-content-center  align-items-center h-100">
                <div class="border-dark col   w-100 h-100">
                <table class=' posicion table table-striped table-bordered w-100'>
                      <thead>
                        <tr>
                          <th>Identificación</th>
                          <th>Nombre</th>
                          <th>Campaña</th>
                          <th>Estado</th>
                          <th>Teléfono</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                      </tbody>
                    </table>
            
                </div>
              </div>
                </div>
        </div>
    </div>
    
        `;
    }
}

customElements.define('menu-elements', MenuElement2);

