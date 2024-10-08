const converter = (mes)=>{
  switch (mes) {
    case 'Enero': 
      return 0
      break;
    case 'Febrero':
      return 1
      break;
    case 'Marzo':
      return 2
      break;
    case 'Abril':
      return 3;
      break;
    case 'Mayo':
      return 4;
      break;
    case 'Junio':
      return 5;
      break;
    case 'Julio':
      return 6;
      break;
    case 'Agosto':
      return 7;
      break;
    case 'Septiembre':
      return 8;
      break;
    case 'Octubre':
      return 9;
      break;
    case 'Noviembre':
      return 10;
      break;
    case 'Diciembre':
      return 11;
      break;
    default:
      break;
  }
}

export default converter