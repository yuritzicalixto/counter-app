// import {Fragment} from 'react'
// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Diana'
// };

//  const getResult = () => {
//    return 4+4;
//  }

// const getResult2 = (a,b) => {
//   return a + b;
// }
import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name }) => {
  if(!title){
    throw new Error('El title no existe')
  }

  return (
    // Nodo padre
    /*Sinonimo de un fragmento
    Es un agrupador de otros elementos html
    En donde tenemos el nodo padre*/
    <>
          {/* <h2> { newMessage.title }</h2> */}
        {/* <h2> { newMessage.title }</h2> */}
        {/* <code>  { JSON.stringify (newMessage)}</code> */}
        <h1>{ title}</h1>
        <p>{subtitle}</p>
        <p>{name}</p>
    </>
  );
}
 /*Los Proptypes que nos permiten definir 
 los tipos de las properties*/
FirstApp.propType = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

/**/
FirstApp.defaultProps = {
  title: 'No soy titulo',
  subtitle: 'No hay subtitulo',
  name:'Diana'
}