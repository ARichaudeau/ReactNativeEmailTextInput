import React from 'react';

import {Button, TextInput, View, Text, StyleSheet} from 'react-native';

export class EmailTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',
                    validated: false};
        this.state = {title: 'L email est requis'}            
  
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeMail(value) {
        console.log('email changed', value);
        this.setState({email: value});
    }

    handleChangeTitle=()=> {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true){
            alert('L email ' + this.state.email + ' est valide');
        }else {
            this.setState({title: 'L email n est pas valide'})
        }
    }

    render(){
        return (
            <View>
            <Text style={styles.text}
            onChangeText = {this.handleChangeTitle}>
            {this.state.title}</Text>    
            <TextInput
            keyboardType='email-address'
            placeholder="Saisissez votre mail"
            type="email-address"
            value={this.state.email}
            onChangeText={this.handleChangeMail} />
            <Button
            onPress={this.handleChangeTitle}
            title='Soumettre'
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
      color: '#FFFFFF'
    },
  });