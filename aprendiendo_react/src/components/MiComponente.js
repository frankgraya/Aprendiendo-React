import React, {Component} from 'react';


class MiComponente extends React.Component{

  render(){

    let receta = {
      nombre: 'Pizza',
      ingredientes: ['Parmesano 30 gr','Tomate','Queso babas', 'jamon cocido' ],
      calorias: 400
    };


      return(
        //<React.Fragment>
        <div className= "mi-componente">
        <h1>{'Receta ' + receta.nombre}</h1>
        <br/>
          <h2>{'Calorias ' + receta.calorias}</h2>
            <ol>

            {
              receta.ingredientes.map((ingrediente, i) =>{
                  console.log(ingrediente);
                  return(
                    <li key={i}>
                    {ingrediente}
                    </li>

                  )
              })
            }

            </ol>

          <hr/>
          </div>
            //</React.Fragment>
      );

  }
}


export default MiComponente
