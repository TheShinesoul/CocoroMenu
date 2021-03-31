import React from 'react';
import Producto from './Producto';
// comida
import arroz_al_vapor from '../assets/img/Comidas/ARROZ_AL_VAPOR.webp';
import bibimap from '../assets/img/Comidas/BIBIMBAP.webp';
import budejige from '../assets/img/Comidas/BUDEJIGE.webp';
import buldak from '../assets/img/Comidas/BULDAK.webp';
import chijimi from '../assets/img/Comidas/CHIJIMI.webp';
import curry from '../assets/img/Comidas/CURRY.webp';
import ensaladaCoreana from '../assets/img/Comidas/ENSALADA_COREANA.webp';
import gapao from '../assets/img/Comidas/GAPAO_RICE.webp';
import japche from '../assets/img/Comidas/JAPCHE.webp';
import katsudon from '../assets/img/Comidas/KATSUDON.webp';
import kimchi from '../assets/img/Comidas/KIMCHI.webp';
import onigiri from '../assets/img/Comidas/Onigiri.webp';
import polloteriyaki from '../assets/img/Comidas/POLLOTERIYAKI.webp';
import sopaMiso from '../assets/img/Comidas/SOPA_MISO.webp';
import sottoek from '../assets/img/Comidas/SOTTOEK-SOTTOEK.webp';
import tofu from '../assets/img/Comidas/TOFU_GANGJEONG.webp';
// desayunos
import toast from '../assets/img/desayunos/TOAST.webp';
import croissant from '../assets/img/desayunos/CROISSANT.webp';
// Postres
import gelatina from '../assets/img/Postres/GELATINA.webp';
import brownie from '../assets/img/Postres/BROWNIE.webp';
import tiramisu from '../assets/img/Postres/TIRAMISU.webp';
import crepaHelado from '../assets/img/crepas/crepaHelado.webp';
import crepamatcha from '../assets/img/crepas/crepamatcha.webp';
// bebidas
import bubbleTea from '../assets/img/Bebidas/bubbleTea.webp';
import dalgona from '../assets/img/Bebidas/dalgona.webp';
import frape from '../assets/img/Bebidas/frappe.webp';
import limonadaCocoro from '../assets/img/Bebidas/LimonadaCoco.webp';



// paises
import coreaSur from '../assets/img/logosPaises/logocorea.webp';
import japon from '../assets/img/logosPaises/logojapon.webp';
import tailandia from '../assets/img/logosPaises/logotailandia.webp';
// estilo
import '../styles/mostrarMenu.scss';
// logos
import cocoroLogo from '../assets/img/cocoroLogo.webp';
import textoCocoro from '../assets/img/textCocoro.webp';
import Menu from './Menu';
import BebidasTabla from './BebidasTabla';


const MostrarMenu = () => {
    const body = document.querySelector('body')
    const inputMenu = document.querySelector('#abrir-cerrar')
    const [menu, setMenu] = React.useState(false)
    const [comida, setComida] = React.useState(true)
    const [desayunos, setDesayunos] = React.useState(true)
    const [postres, setPostres] = React.useState(true)
    const [bebidas, setBebidas] = React.useState(true)
    const hideMenu = () => {
        setMenu(!menu)
        menu ? body.style.overflowY = "auto" : body.style.overflowY = "hidden"
        
    }      

    /**
     * Tipo se considera 1 Comida 2 desayunos 3 postres 4 bebidas
     * Esto se crea con la finalidad de poder hacer filtrados
     */
    const comidas = [
        {
            id: 1,
            nombre : 'BIBIMBAP',
            descripcion: 'Arroz con verduras salteadas, carne y salsa especial.',
            extra:'Con huevo $55',
            precio:50,
            image:bibimap,
            tipo: 1,
            pais:coreaSur
        },
        {
            id: 2,
            nombre : 'SOTTOEK-SOTTOEK',
            descripcion: 'Brocheta de pastel de arroz con salchicha.',
            precio:30,
            image:sottoek,
            tipo: 1,
            pieza: true,
            pais:coreaSur
        },
        {
            id: 3,
            nombre : 'JAPCHE',
            descripcion: 'Fideos de camote con verduras salteadas dulces.',
            precio:50,
            image:japche,
            tipo: 1,
            pais:coreaSur
        }
        ,
        {
            id: 4,
            nombre : 'BUDEJIGE',
            descripcion: 'Fideos con sopa de kimchi y salchichas',
            precio:50,
            image:budejige,
            tipo: 1,
            pais:coreaSur
        }
        ,
        {
            id: 5,
            nombre : 'CHIJIMI',
            descripcion: 'Pancake de verduras más ensalada coreana y salsa.',
            precio:50,
            image:chijimi,
            tipo: 1,
            pais:coreaSur
        }
        ,
        {
            id: 6,
            nombre : 'TOFU GANGJEONG',
            descripcion: 'Tofu capeado con salsa picante, acompañado de huevo marinado en salsa soya y sake más arroz.',
            precio:55,
            image:tofu,
            tipo: 1,
            pais:coreaSur
        }
        ,
        {
            id: 7,
            nombre : 'BULDAK',
            descripcion: 'Pollo picante marinado con ajo y jengibre más queso manchego y arroz.',
            precio:55,
            image:buldak,
            tipo: 1,
            pais:coreaSur
        }
        ,
        {
            id: 8,
            nombre : 'KIMCHI',
            descripcion: 'Porción de acompañamiento (60 gramos)',
            precio:20,
            image:kimchi,
            tipo: 1,
            pais:coreaSur
        },
        {
            id: 9,
            nombre : 'ENSALADA COREANA',
            descripcion: 'Ensalada de lechuga roma, pepino y cebolla con vinagreta picante coreana y ajonjolí.',
            precio:30,
            image:ensaladaCoreana,
            tipo: 1,
            pais:coreaSur
        },
        {
            id: 10,
            nombre : 'GAPAO RICE',
            descripcion: 'Pollo condimentado con chile, ajo y albahaca, con salsa de almeja y soya más arroz.',
            precio:50,
            image:gapao,
            tipo: 1,
            pais:tailandia
        },
        {
            id: 11,
            nombre : 'POLLO TERIYAKI',
            descripcion: 'Arroz con pollo y espinacas, bañado en salsa teriyaki.',
            precio:50,
            image:polloteriyaki,
            tipo: 1,
            pais:japon
        },
        {
            id: 12,
            nombre : 'CURRY',
            descripcion: 'Curry con trozos de pollo y zanahoria, acompañados de arroz al vapor.',
            precio:50,
            image:curry,
            tipo: 1,
            pais:japon
        },
        {
            id: 13,
            nombre : 'KATSUDON',
            descripcion: 'Chuleta de cerdo capeada, huevo revuelto con salsa tradicional sobre arroz.',
            precio:75,
            image:katsudon,
            tipo: 1,
            pais:japon
        },
        {
            id: 14,
            nombre : 'ONIGIRI',
            descripcion: 'Bolita de arroz rellena (ingrediente a elegir) y queso crema.',
            precio:30,
            image:onigiri,
            tipo: 1,
            pieza: true,
            pais:japon
        },
        {
            id: 15,
            nombre : 'SOPA MISO',
            descripcion: 'Sopa japonesa preparada con miso, queso panela y alga.',
            precio:30,
            image:sopaMiso,
            tipo: 1,
            pais:japon
        },
        {
            id: 16,
            nombre : 'ARROZ AL VAPOR',
            descripcion: 'Porción extra de arroz al vapor 200 gramos',
            precio:30,
            image:arroz_al_vapor,
            tipo: 1,
            pais:japon
        }        
    ]

    const desayunosMenu = [
        {
            id: 17,
            nombre : 'TOAST CON AGUACATE Y HUEVO',
            descripcion: 'Incluye ensalada con queso panela y café americano',
            precio:60,
            image:toast,
            tipo: 2,
        },
        {
            id: 18,
            nombre : 'CROISSANT CON HUEVO O CON JAMÓN Y QUESO',
            descripcion: 'Incluye ensalada con queso panela y café americano',
            precio:60,
            image:croissant,
            tipo: 2,
        },
    ]

    const postresMenu = [
        {
            id: 19,
            nombre : 'GELATINA USAGI',
            descripcion: 'Gelatina de té negro con leche más gelatina de corazones sabor coco, un poco de tapicoa y crema batida.',
            precio:45,
            extra: '+ CAFÉ AMERICANO $60.-',
            image:gelatina,
            tipo: 3,
        },
        {
            id: 20,
            nombre : 'BROWNIE CON NUEZ',
            precio:45,
            extra: '+ CAFÉ AMERICANO $60.-',
            image:brownie,
            tipo: 3,
        },
        {
            id: 21,
            nombre : 'TIRAMISÚ',
            precio:45,
            extra: '+ CAFÉ AMERICANO $60.-',
            image:tiramisu,
            tipo: 3,
        },
        {
            id: 22,
            nombre : 'CREPAS SENCILLAS',
            descripcion: 'Zarzamora, fresa, cajeta o crema de avellana',
            precio:45,
            tipo: 3,
        },
        {
            id: 23,
            nombre : 'CREPAS ESPECIALES',
            descripcion: 'Helado con tapioca',
            precio:65,
            image:crepaHelado,
            tipo: 3,
        },
        {
            id: 24,
            nombre : 'CREPAS ESPECIALES',
            descripcion: 'Matcha con tapioca',
            precio:65,
            image:crepamatcha,
            tipo: 3,
        },
    ]

    const bebidasMenu = [
        {
            id: 25,
            nombre : 'LIMONADA COCORO',
            precio:45,
            image:limonadaCocoro,
            tipo: 4,
        },
        {
            id: 26,
            nombre : 'DALGONA COFFEE',
            precio:45,
            image:dalgona,
            tipo: 4,
        },
        {
            id: 27,
            nombre : 'FRAPPE CON TAPIOCA',
            extra: 'EL PRECIO VARÍA CON EL SABOR',     
            image:frape,
            tipo: 4,
        },
        {
            id: 28,
            nombre : 'BUBBLE TEA',   
            precio: 58, 
            image:bubbleTea,
            tipo: 4,
        },
    ]


    return(
        <div>
            <div className="bannerCocoro">
                <div className="logo_cocoro">
                    <img className="logo" alt="logoCocoro" src={cocoroLogo}/>
                    <img className="texto" alt="textoCocoro"src={textoCocoro}/>
                </div>
                <div className="hamburger-menu">                
                    <input id="abrir-cerrar" name="abrir-cerrar" type="checkbox" value=""/>
                    <label onClick={hideMenu} htmlFor="abrir-cerrar" className="toggle-button">
                        <span className="cerrar" title="Cerrar">Cerrar</span>
                        <span className="abrir" title="Abrir">Abrir</span>
                    </label>
                </div>
            </div>
            { menu && 
                <Menu
                    setcomida = {setComida }
                    setDesayunos = {setDesayunos }
                    setPostres = { setPostres }
                    setBebidas = { setBebidas }
                    setMenu = { setMenu }
                    hideMenu = { hideMenu }
                    inputMenu = { inputMenu }
                />
            }
            {
                comida && 
                    <div>
                        <div className="tittle">
                            <p>Comida</p>
                        </div>        
                        { comidas.map((product)=>{ return <Producto producto = { product } key={product.id}/>})}
                    </div>
            }
            {
                desayunos && 
                    <div>
                    <div className="tittle">
                        <p>Desayunos Cocoro</p>
                    </div>       
                        { desayunosMenu.map((desayuno)=>{ return <Producto producto = { desayuno } key={desayuno.id}/>})}
                    </div>
            }
            {
                postres && 
                    <div>
                    <div className="tittle">
                        <p>Postres Cocoro</p>
                    </div>       
                        { postresMenu.map((postre)=>{ return <Producto producto = { postre } key={postre.id}/>})}
                    </div>
            }
            {
                bebidas && 
                    <div>
                    <div className="tittle">
                        <p>Bebidas</p>
                    </div>       
                        { bebidasMenu.map((bebida)=>{ return <Producto producto = { bebida } key={bebida.id}/>})}
                        <BebidasTabla/>
                    </div>

            }

            
            
        </div>
    )
}

export default MostrarMenu