// import {Fragment} from 'react'
// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Diana'
// };

 const getResult = () => {
   return 4+4;
 }

const getResult2 = (a,b) => {
  return a + b;
}


export const FirstApp = ({title }) => {
  
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
        <p> { getResult(1,2) } </p>
    </>
  );
}
