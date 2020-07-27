import React from 'react';
import {
    Grid,
    Container,
    Paper,
    TableContainer,
    Button,
    Table,
    TableHead,
    TableRow,
    TableBody,
    withStyles
} from '@material-ui/core';
import {CustomTableCell} from './CustomTableCell';
import {CustomTableRow} from './CustomTableRow';

const CustomTableButton = withStyles({
    root: {
        borderRadius: 50,
        backgroundColor: 'transparent',
        height: 40,
        '&:hover': {
            backgroundColor: '#282d30',
            color: '#fff'
        },
        '&:hover span.MuiButton-label': {
            color: '#fff'
        },
        '& span.MuiButton-label': {
            fontSize: 16,
            fontFamily: `'Roboto', sans-serif`,
            textTransform: 'none',
            color: '#8b9497',
            marginTop: 2
        }
    }
})(Button);

function ProductList(props) {
    const {products, eventDeleteProduct} = props;

    return (
        <Container>
            <Grid container>
                <div className="product-list">
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell width='580'>Название</CustomTableCell>
                                    <CustomTableCell width='100' align="center">Год</CustomTableCell>
                                    <CustomTableCell width='100' align="center">Цвет</CustomTableCell>
                                    <CustomTableCell width='150' align="left">Статус</CustomTableCell>
                                    <CustomTableCell align="left" colSpan='2'>Цена</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map(product => (
                                    <CustomTableRow key={product._id}>
                                        <CustomTableCell component="th" scope="row">
                                            {product.title}
                                            <div className="product-list__description">
                                                {product.description}
                                            </div>
                                        </CustomTableCell>
                                        <CustomTableCell align="center">{product.year}</CustomTableCell>
                                        <CustomTableCell align="center">
                                            <div className='status-color' style={{background: `${product.color}`}}/>
                                        </CustomTableCell>
                                        <CustomTableCell align="left">{product.status}</CustomTableCell>
                                        <CustomTableCell align="left">{product.price} руб.</CustomTableCell>
                                        <CustomTableCell align="left">
                                            <CustomTableButton
                                                onClick={() => eventDeleteProduct(product._id)}
                                                color="primary"
                                                type="submit">Удалить</CustomTableButton>
                                        </CustomTableCell>
                                    </CustomTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Grid>
        </Container>
    )
}

export default ProductList
