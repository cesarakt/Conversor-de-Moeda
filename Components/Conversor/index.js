import { func } from 'prop-types';
import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

import api from '../../assets/services/api';

export default function Conversor(props){
    const [moedaBValor, setMoedaBValor] = useState(0);
    const [valorConvertido, setValorConvertido] = useState(0);

    

    const changeText = moedaBValor => setMoedaBValor(moedaBValor);
    const { moedaA, moedaB } = props;
    const mostaValor = (valorConvertido === 0) ? '' : valorConvertido;

    useEffect(() => {
        converter();
    }, [])

    async function converter(){
        const dePara = `${moedaA}_${moedaB}`;
        const response = await api.get(`convert?q=${dePara}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`);
        const cotacao = response.data[dePara];
        
        const conversao = cotacao * moedaBValor;
        setValorConvertido(parseFloat(conversao.toFixed(2)));


        Keyboard.dismiss();
    }

    

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

            <TextInput 
                placeholder='Valor a ser convertido'
                value={moedaBValor}
                onChangeText={changeText}
                style={styles.input}
                keyboardType='numeric'
            />

            <TouchableOpacity style={styles.btn} onPress={converter}>
                <Text style={styles.btnTexto}>Converter</Text>
            </TouchableOpacity>

            <Text style={styles.valorConvertido}>{mostaValor}</Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width:0 , height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    input: {
        width: 250,
        height: 45,
        backgroundColor: '#DDD',
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 15,
        fontSize: 18
    },
    btn: {
        width: 150,
        height: 45,
        backgroundColor: '#F00',
        marginTop: 15,
        borderRadius: 5,
        justifyContent: 'center'
    },
    btnTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    },
    valorConvertido: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: 'bold'
    }
});