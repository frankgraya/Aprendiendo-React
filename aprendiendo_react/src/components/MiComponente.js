import React, {Component} from 'react';


class MiComponente extends React.Component{

  render(){

    let receta = {
      nombre: 'Pizza',
      ingredientes: ['Tomate','Queso babas', 'jamon cocido' ],
      calorias: 400
    };


      return(
        //<React.Fragmedddnt>
        <div className= "mi-componente">
        <h1>{'Receta ' + receta.nombre}</h1>
          <h2>{'Calorias ' + receta.calorias}</h2>
            <ol>

            {
              receta.ingredientes.map((ingrediente, i) =>{
                  console.log(ingrediente);
                  return(f
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
