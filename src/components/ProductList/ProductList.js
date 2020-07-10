import React from 'react';
import {Button, Container} from 'react-bootstrap';

function ProductList() {
    return (
        <Container>
            <table className="table" style={{marginTop: '80px'}}>
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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td width='140'>
                        <Button variant="link" type="submit">Удалить</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default ProductList
