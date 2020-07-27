import React from 'react';
import {Field, reduxForm} from 'redux-form';
import RenderField from './renderField';
import {alphaNumeric, numeric, required} from './validatesManagerForm';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {renderSelectField} from './renderSelectField';
import {CustomButton} from './CustomButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function managerForm(props) {
    const colorScheme = ['fff', '000', 'cbcbcc', 'd74345', '88c504'];
    return (
        <Container>
            <form onSubmit={props.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Название'
                            warn={alphaNumeric}
                            name='title'/>
                    </Grid>
                    <Grid item xs={4}>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Год'
                            warn={numeric}
                            name='year'/>
                    </Grid>
                    <Grid item xs={4}>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Цена'
                            warn={numeric}
                            name='price'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Описание'
                            warn={alphaNumeric}
                            name='description'/>
                    </Grid>
                    <Grid item xs={4}>
                        <h6>Цвет</h6>
                        {colorScheme.map((color, index) => {
                            return (
                                <label key={`${index}${color}`}>
                                    <Field name='color' component='input' type='radio' value={`#${color}`}/>
                                </label>
                            )
                        })}
                    </Grid>
                    <Grid item xs={4}>
                        <Field
                            component={renderSelectField}
                            className='form-control'
                            validate={required}
                            name='status'/>
                    </Grid>
                    <Grid item xs={4}>
                        <CustomButton
                            disableElevation
                            endIcon={<ArrowForwardIosIcon/>}
                            variant='contained'
                            color='secondary'
                            type='submit'>
                            отправить
                        </CustomButton>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

const ReduxManagerForm = reduxForm({form: 'managerForm'})(managerForm);

export default ReduxManagerForm;
