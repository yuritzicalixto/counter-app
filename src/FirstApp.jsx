// import {Fragment} from 'react'
const newMessage = {
  message: 'Hola Mundo',
  title: 'Diana'
};


export const FirstApp = () => {
  return (
    // Nodo padre
    /*Sinonimo de un fragmento
    Es un agrupador de otros elementos html
    En donde tenemos el nodo padre*/
    <>
          <h2> { newMessage.title }</h2>
        {/* <h2> { newMessage.title }</h2> */}
        {/* <code>  { JSON.stringify (newMessage)}</code> */}
        <h1>Me aburro!!!!!!</h1>
        <p>ejnkjnekj</p>
    </>
  );
}
