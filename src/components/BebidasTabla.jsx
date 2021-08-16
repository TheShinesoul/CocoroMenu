import React from 'react';
import '../styles/bebidasTabla.scss';

const BebidasTabla = () => {
    return (
        <div className="lista_bebidas">
            <table>
                <thead>
                <tr>
                    <th colSpan="2" rowSpan="2" className="title-table">CAFÉ</th>
                    <th>Chico</th>
                    <th>Grande</th>
                </tr>
                <tr>
                    <th>8oz</th>
                    <th>12 oz</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Espresso</th>
                        <th></th>
                        <th>$27</th>
                        <th>$31</th>
                    </tr>
                    <tr>
                        <th>Cortado</th>
                        <th></th>
                        <th>$29</th>
                        <th>$33</th>
                    </tr>
                    <tr>
                        <th>Americano</th>
                        <th></th>
                        <th>$30</th>
                        <th>$35</th>
                    </tr>
                    <tr>
                        <th>Latte</th>
                        <th></th>
                        <th>$35</th>
                        <th>$40</th>
                    </tr>
                    <tr>
                        <th>Capuchino</th>
                        <th></th>
                        <th>$35</th>
                        <th>$40</th>
                    </tr>
                    <tr>
                        <th>Moka</th>
                        <th></th>
                        <th>$40</th>
                        <th>$45</th>
                    </tr>
                    <tr>
                        <th colSpan="4" className="shot_extra">SHOT EXTRA $5</th>
                        <th colSpan="4" className="shot_extra">TAPIOCA EXTRA $10</th>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <table>
                <thead>
                <tr>
                    <th colSpan="2" rowSpan="2" className="title-table">LATTES</th>
                    <th>Chico</th>
                    <th>Grande</th>
                </tr>
                <tr>
                    <th>8oz</th>
                    <th>12 oz</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Chai</th>
                        <th></th>
                        <th>$35</th>
                        <th>$45</th>
                    </tr>
                    <tr>
                        <th>Matcha</th>
                        <th></th>
                        <th>$45</th>
                        <th>$55</th>
                    </tr>
                    <tr>
                        <th>Taro</th>
                        <th></th>
                        <th>$45</th>
                        <th>$55</th>
                    </tr>
                    <tr>
                        <th>Horchata</th>
                        <th></th>
                        <th>$35</th>
                        <th>$45</th>
                    </tr>
                    <tr>
                        <th>+ Sabor melón</th>
                        <th></th>
                        <th>$45</th>
                        <th>$50</th>
                    </tr>
                    <tr>
                        <th colSpan="4" className="shot_extra">SHOT EXTRA $5</th>
                        <th colSpan="4" className="shot_extra">TAPIOCA EXTRA $10</th>
                    </tr>
                </tbody>
            </table>
            <hr/>

            <table>
                <thead>
                <tr>
                    <th colSpan="2" rowSpan="2" className="title-table">CAFÉ</th>
                    <th>Chico</th>
                    <th>Grande</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="3" className="title-table">TISANAS</th>
                        <th>$29</th>
                        <th>$39</th>
                    </tr>
                    
                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <th colSpan="3" rowSpan="2"></th>
                    <th>Grande</th>
                </tr>
                <tr>
                    <th>12 oz</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="3" className="title-table">SODA ITALIANA</th>
                        <th>$45</th>
                    </tr>
                    <tr>
                        <th>Cereza</th>
                        <th colSpan="2">Mandarina</th>
                        <th>Melón</th>
                    </tr>
                    <tr>
                        <th>Mango</th>
                        <th colSpan="2">Maracuyá</th>
                        <th>Manzana</th>
                    </tr>
                </tbody>
            </table>
            <hr/>

            <table>
                <thead>
                <tr>
                    <th colSpan="3" rowSpan="2"></th>
                    <th>Grande</th>
                </tr>
                <tr>
                    <th>12 oz</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="3" className="title-table">CALPIS</th>
                        <th>$55</th>
                    </tr>
                    
                </tbody>
            </table>

            <hr/>

            <table>
                <thead>
                <tr>
                    <th colSpan="2" rowSpan="2" className="title-table">CAFÉ FRÍO</th>
                    <th>Grande</th>
                </tr>
                <tr>
                    <th>12 oz</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="2">Shakerato</th>
                        <th>$33</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Americano</th>
                        <th>$35</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Latte</th>
                        <th>$40</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Capuchino</th>
                        <th>$40</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Moka</th>
                        <th>$45</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Cold Brew</th>
                        <th>$37</th>
                    </tr>
                    <tr>
                        <th colSpan="4" className="shot_extra">SHOT EXTRA $5</th>
                    </tr>
                </tbody>
            </table>

            <hr/>

            <table>
                <thead>
                <tr>
                    <th colSpan="2" rowSpan="2" className="title-table">FRAPPES</th>
                    <th>Grande</th>
                </tr>
                <tr>
                    <th>12 oz</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="2">Frapuchino</th>
                        <th>$43</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Cookies and cream</th>
                        <th>$48</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Chai</th>
                        <th>$55</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Matcha</th>
                        <th>$65</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Taro</th>
                        <th>$60</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Horchata</th>
                        <th>$55</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Mazapán</th>
                        <th>$45</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Galleta María</th>
                        <th>$45</th>
                    </tr>
                    <tr>
                        <th colSpan="2">Cheesecake</th>
                        <th>$55</th>
                    </tr>
                </tbody>
            </table>

            <hr/>

            <table>
                <thead>
                <tr>
                    <th colSpan="4" rowSpan="2" className="title-table">SMOOTHIES</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="4">Lichi, mango, moras.</th>
                    </tr>
                    <tr>
                        <th>De leche</th>
                        <th>$50</th>
                        <th>De agua</th>
                        <th>$45</th>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <table>
                <thead>
                <tr>
                    <th colSpan="4" rowSpan="2" className="title-table">AFFOGATO</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Natural</th>
                        <th>$40</th>
                        <th>Matcha</th>
                        <th>$45</th>
                    </tr>
                </tbody>
            </table>

        </div>
        
    )
}

export default BebidasTabla