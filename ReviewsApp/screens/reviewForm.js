import React from 'react'
import { View, TextInput, Button, Text } from 'react-native';
import { GLOBAL_STYLES } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string()
                .required()
                    .min(4),
    body: yup.string()
                .required()
                    .min(8),
    rating: yup.string()
                .required()
                    .test(
                        'is-num-1-5',
                        'Rating must be 1-5',
                        (val) => {
                            return parseInt(val) < 6 
                            &&
                            parseInt(val) > 0
                        }
                    ),
})
export default function ReviewForm({ addReview }) {

    return (
        <View style={GLOBAL_STYLES.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={GLOBAL_STYLES.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')} //triggered when moving from input to another
                        />
                        <Text style={GLOBAL_STYLES.errorText}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput 
                            style={GLOBAL_STYLES.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')} //triggered when moving from input to another
                            multiline
                        />
                        <Text style={GLOBAL_STYLES.errorText}>{ props.touched.body && props.errors.body }</Text>

                        <TextInput 
                            style={GLOBAL_STYLES.input}
                            placeholder='Rating(1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')} //triggered when moving from input to another
                            keyboardType='numeric'
                        />
                        <Text style={GLOBAL_STYLES.errorText}>{ props.touched.rating && props.errors.rating }</Text>

                        {/* <Button 
                            title="submit"
                            color="maroon"
                            onPress={props.handleSubmit}
                        /> */}
                        <FlatButton 
                            text='submit'
                            onPress={props.handleSubmit}
                        />
                    </View>
                    )
                }
            </Formik>
        </View>   
    )
}
