import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";
import { Spinner } from 'react-bootstrap';
import '../ListContainer/ItemListContainer.css';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";


const ItemListContainer = () => {
    const [bool, setBool] = useState(true)

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() =>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then (dataRes => setProductos(dataRes.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        .finally(()=> setLoading(false))
    },[])

    console.log(productos)
    
    // useEffect(() => {
    //     if(categoriaId){
    //         getFetch()
    //         .then((resp) => {
    //             setProductos(resp.filter(producto => producto.categoria === categoriaId))
    //             setLoading(false)
    //         }).catch(err => console.log(err))
    //     }else{
    //         getFetch()
    //         .then((resp) => setProductos(resp))
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))
    //     }
    // }, [categoriaId])



    return (
        <div>
            {loading ?
                <div className="mx-5 my-5 cargando d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="primary" className="mx-5"/>
                    <Spinner animation="border" variant="secondary" className="mx-5"/>
                    <Spinner animation="border" variant="success" className="mx-5"/>
                    <Spinner animation="border" variant="danger" className="mx-5"/>
                    <Spinner animation="border" variant="warning" className="mx-5"/>
                </div>
                :
                <div className="my-5 mx-5 d-flex flex-wrap justify-content-around">
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer



