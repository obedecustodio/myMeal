import React from 'react'
import image from '../assets/images/bgr2.png'
import background from '../assets/images/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Welcome = () => {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-6 p-3">
                    <img src={image} alt="oi" className='img-fluid border-roundend' id='img' />
                </div>
                <div className="col-6">
                    <h1 className='text-warning'>myMeal</h1>

                    <h3>Experimente a melhor comida </h3>
                    <p>Explore sabores excepcionais em cada prato no <strong>myMeal</strong>. Da tradição à inovação, nossa cozinha oferece uma experiência culinária única, preparada com ingredientes frescos e paixão. Faça parte dessa jornada gastronômica e descubra o que torna nossos pratos tão irresistíveis.</p>
                    <Link to="/menu" className='btn btn-warning'>Ver Menu</Link>

                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6">
                    <h1 className='text-warning'>Sobre nós</h1>

                    <h3>Nós cozinhamos a comida mais saborosa  </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed delectus autem nobis sint repudiandae, quam qui. Modi exercitationem expedita reiciendis maiores quisquam, quasi ullam atque placeat quod quam libero.</p>
                    <button className='btn btn-warning '> Ver Menu</button>
                </div>
                <div className="col-6 p-3">
                    <img src={background} alt="oi" className='img-fluid rounded-3' id='img' />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-warning text-center p-5'>Nossos servicos</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4 d-flex flex-column align-items-center">
                    {/* <FontAwesomeIcon icon="fa-solid fa-check-square" id='btn' className='m-5'/> */}
                    <FontAwesomeIcon icon="fa-solid fa-utensils" id='btn' className='m-5 border rounded-3 border-warning p-2' />
                    <p>Refeicoes</p>
                </div>
                <div className="col-4 d-flex flex-column align-items-center">
                    {/* <FontAwesomeIcon icon="fa-solid fa-check-square" id='btn' className='m-5'/> */}
                    <FontAwesomeIcon icon="fa-solid fa-truck-fast" id='btn' className='m-5 border rounded-3 border-warning p-2' />
                    <p>Entrega</p>
                </div>
                <div className="col-4 d-flex flex-column align-items-center">
                    {/* <FontAwesomeIcon icon="fa-solid fa-check-square" id='btn' className='m-5'/> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-bicycle"  id='btn' className='m-5 border rounded-3 border-warning p-2'/> */}
                    <FontAwesomeIcon icon="fa-solid fa-burger" id='btn' className='m-5 border rounded-3 border-warning p-2' />
                    <p>Fast Food</p>
                </div>
            </div>
        </div>
    )
}
