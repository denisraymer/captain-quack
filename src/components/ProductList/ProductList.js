import React from 'react';
import {Button, Container} from 'react-bootstrap';

function ProductList(props) {
    const {products, eventDeleteProduct} = props;

    return (
        <Container>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Год</th>
                    <th scope="col">Цвет</th>
                    <th scope="col">Статус</th>
                    <th scope="col" colSpan='2'>Цена</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => {
                    return (
                        <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>{product.year}</td>
                            <td>
                                <div className='status-color' style={{background: `${product.color}`}}/>
                            </td>
                            <td>{product.status}</td>
                            <td>{product.price}</td>
                            <td width='140'>
                                <Button variant="link" type="submit"
                                        onClick={() => eventDeleteProduct(product._id)}>Удалить</Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </Container>
    )
}

export default ProductList
