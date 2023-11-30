import Card from '../components/Card'
import React, { useState } from 'react'
import ul from '../assets/images/1l.jpg'
import dl from '../assets/images/2l.jpg'
import ShoppingCart from './ShoppingCart'
import image from '../assets/images/bgr2.png'
import pz1 from '../assets/images/pizza1.jpg'
import image2 from '../assets/images/bg2.jpg'
import pz2 from '../assets/images/pizza2.jpg'
import cb1 from '../assets/images/combo1.jpg'
import cappy from '../assets/images/cappy.jpg'
import rf from '../assets/images/refrescos.jpg'
import bg1 from '../assets/images/burguerSimples.jpg'
import bg3 from '../assets/images/burguerCompleto.jpg'
import background from '../assets/images/background.jpg'
import bg2 from '../assets/images/burguerSimplesBatatas.jpg'
import bg4 from '../assets/images/burguerCompletoBatatas.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Menu = () => {
    const [pedido, setPedido] = useState([]);
    const [cart, setCart] = useState(0);
    const [total, setTotal] = useState(0);
    const adicionar = (item, valor, id) => {
        setTotal(t => t + valor)
        setPedido(prev => {
            let newPedido = [...prev, {
                id: id,
                name: item,
                price: valor,
                quant: 1,
            }]
            return newPedido
        })
        setCart(c => 1)
    }
    return (
        <div>
                {cart == 1 ? (
                    <ShoppingCart selectedItems={pedido} total={total}/>
                ) : (
                    ''
                )}

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-warning text-center p-5'><FontAwesomeIcon icon="fa-solid fa-burger" beat /> Menu</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-warning'>Hamburguers</h3>
                    </div>
                    <div className="col-md-4">
                        <Card m1={bg1} valor={120} descri={"Hamburguer simples"} id={1} adicionar={adicionar} />
                    </div>
                    <div className="col-md-4">
                        <Card m1={bg2} valor={170} descri={'Hamburguer simples com batata'} id={2} adicionar={adicionar} />
                    </div>
                    <div className="col-md-4">
                        <Card m1={bg3} valor={150} descri={'Hamburguer completo'} id={3} adicionar={adicionar} />
                    </div>
                    <div className="col-md-4">
                        <Card m1={bg4} valor={250} descri={'Hamburguer completo com batata'} id={4} adicionar={adicionar}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-warning'>Pizzas</h3>
                    </div>
                    <div className="col-md-4">
                        <Card m1={pz1} valor={699} descri={"Pizza mexicana"} id={5} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={pz2} valor={725} descri={'Hamburguer muzzarela'} id={6} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={image2} valor={890} descri={'Pizza italiana'} id={7} adicionar={adicionar}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-warning'>Combos</h3>
                    </div>
                    <div className="col-md-4">
                        <Card m1={cb1} valor={230} descri={"1 Simples + Extra + Lata"} id={8} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={background} valor={300} descri={'1 Completo + Extra + Lata'} id={9} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={background} valor={400} descri={'2 Simples + Extras + Latas'} id={10} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={background} valor={500} descri={'2 Completos + Extras + Latas'} id={11} adicionar={adicionar}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-warning'>Drinks</h3>
                    </div>
                    <div className="col-md-4">
                        <Card m1={rf} valor={53} descri={"Lata"} id={12} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={ul} valor={85} descri={'1 Litro'} id={13} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={dl} valor={110} descri={'2 Litros'} id={14} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={image2} valor={28} descri={'250 mls'} id={15} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={cappy} valor={63} descri={'Cappy'} id={16} adicionar={adicionar}  />
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-warning'>Aperitivos e Extras</h3>
                    </div>
                    <div className="col-md-4">
                        <Card m1={image} valor={100} descri={"Batatas"} id={17} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={background} valor={150} descri={'Wings'} id={18} adicionar={adicionar}  />
                    </div>
                    <div className="col-md-4">
                        <Card m1={image2} valor={110} descri={'Onions'} id={19} adicionar={adicionar}  />
                    </div>
                </div>
            </div>
        </div>
    )
}
