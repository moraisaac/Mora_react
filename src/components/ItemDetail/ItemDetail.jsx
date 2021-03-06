import React from 'react';
import { Image, Card } from 'react-bootstrap';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';


const ItemDetail = ({ prod }) => {


    return (
            <div className="d-flex flex-row aling-items-center mx-5">
                <div className="p-1">
                    <Image src={prod.foto} alt="" className="w-50" />
                </div>
                <div className='p-1'>
                    <Card className="text-center">
                        <Card.Header className='text-capitalize'>Categoria: {prod.categoria}</Card.Header>
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Optio modi nostrum accusamus illum nobis explicabo similique excepturi
                            </Card.Text>
                            <Card.Text> $ {prod.price}</Card.Text>
                            <Intercambiabilidad prod = {prod}/>
                        </Card.Body>
                        <Card.Footer className="text-muted">...</Card.Footer>
                    </Card>
                </div>
            </div>
    )
}

export default ItemDetail
