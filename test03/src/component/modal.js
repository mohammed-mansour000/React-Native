import React, { Component } from 'react';
import 
    { 
        Dimensions,
        Modal,
        Share ,
        View,
        Button,
        Text,
        Image
    } from 'react-native';
const webViewHeight = Dimensions.get('window').height - 56;

function ModalComponent(props) {
    const handleClose = () => {
        return props.onClose();
    }

    const handleShare = () => {
        const web_url = props.articleData.web_url;
        const title = props.articleData.title
        const message = `${title}\n\nRead More @${web_url}\n\nShared via News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

        const { showModal, articleData } = props;
        const { title, description, url } = articleData;
        console.log(url)

        if( url != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={handleClose}
            >
                <View style={{margin:15, marginBottom:0, backgroundColor:'#ffffff'}}>
                    <View style={{backgroundColor:'#000000'}}>
                        <View>
                            <Button onPress={handleClose} transparent
                                title='close'
                            >
                            </Button>
                        </View>
                        <View>
                            <Text children={title} style={{color: 'white', textAlign: 'center'}}/>
                        </View>
                        <View>
                            <Button onPress={handleShare} transparent
                                title='share'
                            >
                            </Button>
                        </View>
                    </View>
                    <View contentContainerStyle={{height: webViewHeight}}>
                        <View>
                            <Image 
                                source={{uri: url}}
                                resizeMode="cover"
                                style={{
                                    width: '100%',
                                    height: 200,
                                }}
                            />
                            <Text
                                 style={{
                                    fontSize: 20,
                                    color: 'black',
                                    fontWeight: 'bold',
                                    fontFamily: 'nunitoBold',
                                    textTransform: 'capitalize',
                                    alignSelf: 'center',
                                    paddingTop: 20
                                  }}
                            >
                                {title}
                            </Text>
                            <Text
                                style={{
                                    color: 'gray',
                                    fontSize: 18,
                                    paddingTop: 20,
                                    padding: 5,
                                    textAlign: 'center',
                                    height: '100%',
                                }}>
                                {description}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
        } else {
            return null;
        }
}

export default ModalComponent;
