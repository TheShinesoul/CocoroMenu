import React from 'react';
import '../styles/product.scss';

const Producto = ({producto}) => {
    return(
        <div className="card_product">            
            <h1 className="card_title"> { producto.nombre }</h1>
            { ( producto.descripcion !== '' && producto.hasOwnProperty("descripcion") )&& <p className="card_description"> { producto.descripcion }</p> }            
            { ( producto.precio !== '' && producto.hasOwnProperty("precio") )&& 
                <p className="card_price"> ${ producto.precio }.- {( producto.pieza !== false && producto.hasOwnProperty("pieza") )&& 'c/u'}</p>
            }   
            { ( producto.extra !== '' && producto.hasOwnProperty("extra") )&& <p>( { producto.extra } )</p> }
            { ( producto.image !== '' && producto.hasOwnProperty("image") )&& 
                <div className="card_image"
                    style={{ background: `url(${producto.image})` }}>
                </div>
            }
            
            { ( producto.pais !== '' && producto.hasOwnProperty("pais") ) && 
                <div className="card_country">
                    <img src={producto.pais} alt="logoPais"></img>
                </div>
             }
        </div>
    )
}

export default Producto;