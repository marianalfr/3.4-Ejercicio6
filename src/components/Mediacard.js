import React from 'react';
import '../styles/App.scss';

// Elimino esto para el ejercicio 3. También quito el this. delante de todas las props.
//class Mediacard extends React.Component {
  
    //render() {

const Mediacard = props => {

        const appHeader = (
            <header className="header">
              <div className={"image "+ props.imgno}></div>
              <div className="author">
                 <h2>{props.name}</h2>
                 <p className="date">{props.date}</p>
              </div>
            </header>);
         
         const appMain = (
            <main>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Enim neque volutpat ac tincidunt vitae. Nisl nisi scelerisque eu ultrices. Ac tincidunt vitae semper quis lectus. Urna et pharetra pharetra massa massa ultricies mi. Volutpat ac tincidunt vitae semper quis lectus nulla at. Aliquam id diam maecenas ultricies mi. Amet consectetur adipiscing elit pellentesque habitant. Id leo in vitae turpis massa sed. Tellus at urna condimentum mattis pellentesque id. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. </p>
             
             <div className="article-footer">
               <p className="more">Leer más...</p>
               <p className="likes">{props.likes}<i class={'fas fa-heart ' + props.heart}></i></p>
             </div>
            </main>
       );
   
       const appRoot = (
         //<div className="app">  //Lo cambio para el ejercicio 5
           <div className="card">
             {appHeader}
             {appMain}
           </div>
         //</div>
       );
   
       return appRoot;
    //}
}

//Ejercicio 2:
//const componentToRender = <Mediacard name="Mariana Lerma" date="15 de Diciembre de 2019" likes="20" heart="fill" />;

export default Mediacard;

//export default componentToRender;