import React from 'react';
import {Field, reduxForm} from 'redux-form';
import RenderField from './renderField';
import {numeric, required} from './validatesManagerForm';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {renderSelectField} from './renderSelectField';
import {CustomButton} from './CustomButton';
import {Grid, Container, FormControl, FormLabel, RadioGroup} from '@material-ui/core';
import RenderRadioField from './renderRadioField';

function managerForm(props) {
    const colorScheme = ['fff', '000', 'cbcbcc', 'd74345', '88c504'];
    return (
        <Container>
            <form onSubmit={props.handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Название'
                            name='title'/>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Год'
                            warn={numeric}
                            name='year'/>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
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
                            label='Описание'
                            name='description'/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="manager-radio-form">
                            <FormControl component='fieldset'>
                                <FormLabel component='legend' className='label'>Цвет</FormLabel>
                                <RadioGroup defaultValue='female' row>
                                    {colorScheme.map((color, index) => {
                                        return (
                                            <label key={`${index}${color}`}>
                                                <Field
                                                    name='color'
                                                    component={RenderRadioField}
                                                    type='radio'
                                                    value={`#${color}`}/>
                                            </label>
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Field
                            component={renderSelectField}
                            className='form-control'
                            validate={required}
                            name='status'/>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
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
