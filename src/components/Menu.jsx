import React from 'react';
import '../styles/menu.scss';

const Menu = (
    {
        setcomida,
        setDesayunos,
        setPostres,
        setBebidas,
        hideMenu,
        inputMenu,
        setEnsaladas
    }) => {
    const showProduct = (id) => {
        switch (id) {
            case 1:
                setcomida(true)
                setDesayunos(false)
                setPostres(false)
                setBebidas(false)
                setEnsaladas(false)
                hideMenu()
                inputMenu.checked = 0
                break;
            case 2:
                setcomida(false)
                setDesayunos(true)
                setPostres(false)
                setBebidas(false)
                setEnsaladas(false)
                hideMenu()
                inputMenu.checked = 0
                break;
            case 3:
                setcomida(false)
                setDesayunos(false)
                setPostres(true)
                setBebidas(false)
                setEnsaladas(false)
                hideMenu()
                inputMenu.checked = 0
                break;
            case 4:
                setcomida(false)
                setDesayunos(false)
                setPostres(false)
                setBebidas(true)
                setEnsaladas(false)
                hideMenu()
                inputMenu.checked = 0
                break;
            case 5:
                setcomida(true)
                setDesayunos(true)
                setPostres(true)
                setBebidas(true)
                setEnsaladas(true)
                hideMenu()
                inputMenu.checked = 0
                break;
            case 6:
                setcomida(false)
                setDesayunos(false)
                setPostres(false)
                setBebidas(false)
                setEnsaladas(true)
                hideMenu()
                inputMenu.checked = 0
                break;   
            default:
                break;
        }
    }
    return (

        <div className="menu-container">
            <div className="menu-lista">
                <ul>
                    <li onClick={()=>showProduct(1)}>Comida</li>
                    <li onClick={()=>showProduct(2)}>Desayunos Cocoro</li>
                    <li onClick={()=>showProduct(6)}>Ensaladas & Sandwich</li>
                    <li onClick={()=>showProduct(3)}>Postres Cocoro</li>
                    <li onClick={()=>showProduct(4)}>Bebidas</li>
                    <li onClick={()=>showProduct(5)}>Mostrar todo</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu