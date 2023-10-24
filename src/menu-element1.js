import { LitElement, html, css } from "lit-element";
import loginStyle from "./login-style";
import { MenuElement2 } from "./menu-element2";
export class MenuElement1 extends LitElement {

    ingresarMenuPege2(){

        const MenuElement2 = document.createElement('menu-elements');
        document.body.innerHTML = ''; 
        document.body.appendChild(MenuElement2);
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
    /*modal usuario*/
    abrirModal() {

        const miModal = this.shadowRoot.querySelector("#miModal");
        miModal.style.display = "block";
      }
    
      cerrarModal() {
        const miModal = this.shadowRoot.querySelector("#miModal");
        miModal.style.display = "none";
      }
      /*fin del modal usuario */

      /*modal campaña*/
    abrirModal1() {

        const miModal1 = this.shadowRoot.querySelector("#miModal1");
        miModal1.style.display = "block";
      }
    
      cerrarModal1() {
        const miModal1 = this.shadowRoot.querySelector("#miModal1");
        miModal1.style.display = "none";
      }/*fin del modal campaña*/

      static get properties() {
        return {
          usuarios: { type: Array },
          identifi: { type: String },
          nombre: { type: String },
          campana: { type: String },
          estado: { type: String },
          tel: { type: String },
          datos:{type: String},
          cantidadLlamadas:{type:Number}
        };
      }
    
      constructor() {
        super();
        this.usuarios = []; 
        this.identifi = '';
        this.nombre = '';
        this.campana = '';
        this.estado = '';
        this.tel = '';
        this.contador = 0; 
        this.contador1 = 0; 
        this.datos = ''; 
        this.cantidadLlamadas=0;
        this.campañas=[];
        this.nombrecamp='';
        this.tiempo='';
        this.equipocamp='';
        this.estadocamp='';
      }

      actualizarEstado(){
        const usuarioActivo= this.usuarios.filter((usuario)=>usuario.estado==="activo").length;
        
        const usuarioDesactivo= this.usuarios.filter((usuario)=>usuario.estado==="desactivado").length;
        this.shadowRoot.querySelector("#actualiza").textContent=usuarioActivo;
        this.shadowRoot.querySelector("#actualiza1").textContent=usuarioDesactivo;
        
      }
      actualizarEstadoCampaña(){
        const CampañaActiva= this.campañas.filter((campana)=>campana.estadocamp==="activo").length;
        this.shadowRoot.querySelector("#actualizaCamp").textContent=CampañaActiva;
        
      }
      funcionBotonActivar(campana) {
        const index = this.campañas.indexOf(campana);
        if (index !== -1) {
          this.campañas[index].estadocamp = 'activo';
          console.log(`Se activó la campaña ${campana.nombrecamp}`);
          this.tablacompañia(2);
          this.actualizarEstadoCampaña();
        }
      }
      
      funcionBotonDesactivar(campana) {
        const index = this.campañas.indexOf(campana);
        if (index !== -1) {
          this.campañas[index].estadocamp = 'desactivo';
          console.log(`Se desactivó la campaña ${campana.nombrecamp}`);
          this.tablacompañia(2);
          this.actualizarEstadoCampaña();
        }
      }
      
      /*tablas de consulta*/
      tablaUsuario(y){
        if(y==1){
            this.datos = html`
        
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
                ${this.usuarios.map(
                  (usuario) => html`
                    <tr>
                      <td>${usuario.identificacion}</td>
                      <td>${usuario.nombre}</td>
                      <td>${usuario.campana}</td>
                      <td>${usuario.estado}</td>
                      <td>${usuario.telefono}</td>
                    </tr>
                  `
                )}
              </tbody>
            </table>`
        }
        return this.datos;
        
      }
      //compañia
      tablacompañia(y) {
        if (y == 2) {
          this.datos = html`
            <table class='posicion table table-striped table-bordered w-100'>
              <thead>
                <tr>
                  <th>Nombre Campaña</th>
                  <th>Tiempo</th>
                  <th>Equipo</th>
                  <th>Estado Campaña</th>
                  <th>Activar Campaña</th>
                  <th>Desactivar Campaña</th>
                </tr>
              </thead>
              <tbody>
                ${this.campañas.map(
                  (campana) => html`
                    <tr>
                      <td>${campana.nombrecamp}</td>
                      <td>${campana.tiempo}</td>
                      <td>${campana.equipocamp}</td> 
                      <td>${campana.estadocamp}</td>
                      <td><button class='btn btn-dark d-flex m-1' @click='${()=>this.funcionBotonActivar(campana)}'>activar <i class="fas fa-plus fa-beat-fade"></i></button></td>
                      <td><button class='btn btn-dark d-flex m-1' @click='${()=>this.funcionBotonDesactivar(campana)}'>desactivar <i class="fas fa-plus fa-beat-fade"></i></button></td>
                    </tr>
                  `
                )}
              </tbody>
            </table>`;
        }
        return this.datos;
      }
      
      tablaEquipo(y){
        if(y==3){
            this.datos = html`
        <table class=' posicion table table-striped table-bordered w-100'>
              <thead>
                <tr>
                  <th>Identificacion del Equipo</th>
                  <th># integrantes</th>
                  <th>Estado del equipo</th>
                  <th>Campaña del equipo </th>
                  <th>Activar Campaña</th>
                  <th>Desactivar Campaña</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>`
        }
        return this.datos;
        
      }
      /*fin de las tablas*/
      /*registrar ususarios */
      registrarUsuario() {
        if (this.identifi && this.nombre && this.campana && this.estado && this.tel) {
          const nuevoUsuario = {
            identificacion: this.identifi,
            nombre: this.nombre,
            campana: this.campana,
            estado: this.estado,
            telefono: this.tel,
          };
          this.usuarios = [...this.usuarios, nuevoUsuario];
          
          console.log(this.usuarios)
          this.identifi = '';
          this.nombre = '';
          this.campana = '';
          this.estado = '';
          this.tel = '';
          this.actualizarEstado();
          this.tablaUsuario(1);
        } 
        
      }
      /*registrar campañas */
      registrarCampaña() {
        if (this.nombrecamp && this.tiempo && this.equipocamp && this.estadocamp) {
          const nuevaCampaña = {
            nombrecamp: this.nombrecamp, // Corregir el nombre de la propiedad
            tiempo: this.tiempo,
            equipocamp: this.equipocamp, // Corregir el nombre de la propiedad
            estadocamp: this.estadocamp,
          };
          this.campañas = [...this.campañas, nuevaCampaña];
      
          console.log(this.campañas);
          this.nombrecamp = '';
          this.tiempo = '';
          this.equipocamp = '';
          this.estadocamp = '';
          this.actualizarEstadoCampaña();
          this.tablacompañia(2);
        }

      }

      /*buscar usu*/
      buscarUsu() {
        if (this.telefono && this.nombre) {
            const resultado = this.usuarios.filter((usuario) => {
                const numero = this.telefono && usuario.telefono.includes(this.telefono);
                const username = this.nombre && usuario.nombre.includes(this.nombre);
                return numero && username;
            });
    
            if (resultado.length > 0) {
                this.cantidadLlamadas += 1;
                this.actualizarEstado();
                alert('Recibido');
            } else {
                console.log('Usuario no encontrado');
            }
        }
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
                    <button class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue" @click='${(e)=>this.tablaUsuario(1)}'> <i class="fa-solid fa-user-plus fa-beat"> </i><strong>Usuario</strong></button>
                </div>
                <div class='d-flex mt-2'>
                    <button class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue" @click='${(e)=>this.tablacompañia(2)}'> <i class="fa-solid fa-bullhorn fa-flip"> </i><strong>Campañas</strong></button><br>
                </div>
                <div class='d-flex mt-2 ml-2'>
                    <button class="w-100 m-2 bg-light btn border border-dark bottom-rounded text-blue" @click='${(e)=>this.tablaEquipo(3)}'> <i class="fa-solid fa-users fa-bounce"></i> <strong>Equipos<strong></button><br>
                </div>
            </div>
        </div>
        <div class='flex-container w-100 h-100 d-flex justify-content-center align-items-center'>
            <div class='bg-otro rounded w-75 d-flex flex-column m-3'>
                <div class='container d-flex justify-content-center align-items-center h-100 w-100'>
                    <div class='h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-dark texto ' id='actualiza'>0</p>
                    </div>
                    <div class='bg-color h-50 rounded w-100  bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-white'>Usuarios<br>Conectados</p>
                    </div>
                </div>
            </div>
            <div class='bg-otro rounded w-75 d-flex flex-column m-3'>
                <div class='container d-flex justify-content-center align-items-center h-100 w-100'>
                    <div class='h-50 w-50 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-dark texto' id='actualiza1'>0</p>
                    </div>
                    <div class='bg-color h-50 rounded w-100  bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-white'>Usuarios<br>Ausentes</p>
                    </div>
                </div>
            </div>
            <div class='bg-otro rounded w-75 d-flex flex-column m-3'>
                <div class='container d-flex justify-content-center align-items-center h-100 w-100'>
                    <div class='h-50 w-25 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-dark texto'> 40</p>
                    </div>
                    <div class='bg-color h-50 rounded w-100  bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-white'>Cantidad <br>Llamadas</p>
                    </div>
                </div>
            </div>
            <div class='bg-otro rounded w-50 d-flex flex-column m-3'>
                <div class='container d-flex justify-content-center align-items-center h-100 w-100'>
                    <div class='h-50 w-25 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-dark texto' id='actualizaCamp'> 0</p>
                    </div>
                    <div class='bg-color h-50 rounded w-100  bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big'>
                        <p class='text-white'>Campañas<br>Activas</p>
                    </div>
                </div>
            </div>
        </div> 
        <div class="w-75 p-3">
            <div class="formulario w-15 m-3 h-25 rounded ">
                    <div class="d-flex p-3 w-100">
                        <input class="form-control" @input='${(e)=>(this.telefono=e.target.value)}' placeholder="Número"/>
                    </div>
                    <div class="w-100 d-flex p-3">
                        <input class="form-control" @input='${(e)=>(this.nombre=e.target.value)}' placeholder="Nombre"/>
                    </div>
                        <button type="submit" class="btn btn-dark d-flex m-3" @click='${this.buscarUsu()}'>Buscar</button>
            </div>
            <div  class='cont  h-100 rounded'>
                <div class=" d-flex justify-content-between mt-3">
                    <button class="btn btn-dark d-flex m-3">filtrar <i class="fas fa-plus fa-beat-fade"></i></button>
                    <button  id="botonAbrirModal1" class="btn btn-dark d-flex m-3" @click="${this.abrirModal1}">Nueva Campaña <i class="fas fa-plus fa-beat-fade"></i></button>
                    <div id="miModal1" class="modal">
                        <div class="modal-dialog">
                          <div class="modal-content h-50 d-flex justify-content-center aling-item-center">
                            <button class='color  bg-transparent border-0' @click="${this.cerrarModal1}">X</button>
                            <div>
                              <label>Nombre de la campaña:</label>
                              <input type="text" placeholder='nombre' .value="${this.nombrecamp}" @input="${(e) => (this.nombrecamp = e.target.value)}"><br>
                              <label>Tiempo:</label>
                              <input type="text"  placeholder='tiempo' .value="${this.tiempo}" @input="${(e) => (this.tiempo = e.target.value)}"><br> 
                              <label>Equipo:</label> 
                              <input type="text"  placeholder='equipo' .value="${this.equipocamp}" @input="${(e) => (this.equipocamp = e.target.value)}"><br>
                              <label>Estado de la campaña:</label>
                              <input type="text"  placeholder='estado' .value="${this.estadocamp}" @input="${(e) => (this.estadocamp = e.target.value)}"><br> 
                              <button @click="${this.registrarCampaña}"  class="btn btn-dark d-flex m-1">Registrar  <i class="fas fa-plus fa-beat-fade"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>

                    <button id="botonAbrirModal" class="btn btn-dark d-flex m-3" @click="${this.abrirModal}">Nuevo <i class="fas fa-plus fa-beat-fade"></i></button>
                      <div id="miModal" class="modal">
                        <div class="modal-dialog">
                          <div class="modal-content h-50 d-flex justify-content-center aling-item-center">
                            <button class='color  bg-transparent border-0' @click="${this.cerrarModal}">X</button>
                            <div>
                              <label>Identificación de Usuario:</label>
                              <input type="text" .value="${this.identifi}" @input="${(e) => (this.identifi = e.target.value)}"><br>
                              <label>Nombre de Usuario:</label>
                              <input type="text" .value="${this.nombre}" @input="${(e) => (this.nombre = e.target.value)}"><br> 
                              <label>Campaña de Usuario:</label> <input type="text" .value="${this.campana}" @input="${(e) => (this.campana = e.target.value)}"><br>
                              <label>Estado de Usuario:</label>
                              <input type="text" .value="${this.estado}" @input="${(e) => (this.estado = e.target.value)}"><br> 
                              <label>Teléfono de Usuario:</label> <input type="text" .value="${this.tel}"  @input="${(e) => (this.tel = e.target.value)}" ><br>
                              <button @click="${this.registrarUsuario}"  class="btn btn-dark d-flex m-1">Registrar  <i class="fas fa-plus fa-beat-fade"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            <div class="mt-3 mb-2 m-3" style="border: 1px solid #ccc; padding: 10px;">
                <div class="bg-color-secondary1 d-flex justify-content-center  align-items-center h-100">
                    <div class="border-dark col   w-100 h-100">
                    ${this.tablaUsuario(0)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        `;
    }
}

customElements.define('menu-element', MenuElement1);

