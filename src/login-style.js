import {css} from 'lit-element';
export default css`
#imagen{
    width:6%;
    height:15%;

}
.z-index-1{
 z-index: 999;
}
.fondocolor{
    background:#000;
}
.bg-color{
    background:#03274B;
}
.bg-otro{
    font-family: verdana;
    background:#A7C1D1;
}
.flex-container{
    position: relative;
    top:-400px;
    left:100px;
}
.bg-coulor{
    background:#0000001d;
}
.formulario {
    position: absolute;
    top: 120px;
    background:#A7C1D1;
  }
  
.cont {
    margin-top:-827px;
    margin-left:400px;
    background:#A7C1D1;
    width:700px;
}
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
  }
  .color{
    width:10%;
  }
  .color:hover{
    color:tomato;
  }

  .fs-letra{
    font-size:12px;
  }
`