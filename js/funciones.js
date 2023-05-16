function redirectToIndex2() {
    window.location.href = "index2.html";
  }


  function calcularTotal() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    if (isNaN(cantidad)) {
      alert('CUIDADO DEBE INGRESAR UNA CANTIDAD');
      document.getElementById('exampleFormControlInput2').value = 'Total a Pagar $: DEBE INGRESAR UNA CANTIDAD';
      return;
    }
    const categoria = document.getElementById('categoria').value;
    let descuento = 0;
  
    switch (categoria) {
      case 'estudiante':
        descuento = 0.8;
        break;
      case 'trainee':
        descuento = 0.5;
        break;
      case 'junior':
        descuento = 0.15;
        break;
      default:
        break;
    }
  
    const precio = cantidad * 200;
    const total = precio - (precio * descuento);
  
    document.getElementById('exampleFormControlInput2').value = `Total a pagar $: ${total}`;
  }
  
  
  function borrarCampos() {
    document.getElementById('cantidad').value = '';
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('exampleFormControlInput2').value = '';
  }
  
  document.querySelector('.btn-green2:nth-of-type(2)').addEventListener('click', calcularTotal);
  document.querySelector('.btn-green2:nth-of-type(1)').addEventListener('click', borrarCampos);
  

  document.getElementById("total-a-pagar").readOnly = true;

  