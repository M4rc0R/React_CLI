import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({onPress, desabilitada = true, preenchida, grande = false}) {

    const estilos = stylesFunctions(grande);

    const getImagem = () => {
        if (preenchida){
            return estrela;
        } else {
            return estrelaCinza;
        }
    };


    return <TouchableOpacity disabled={desabilitada} onPress={onPress}>
             <Image source={getImagem()} style={estilos.estrela} />
           </TouchableOpacity>;
}

const stylesFunctions = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    },
});

