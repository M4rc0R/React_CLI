import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
// import { carregaProdutores } from '../../../services/carregaDados';
import useProdutores from '../../../hooks/useProdutores';
import Produtor from './produtor';

export default function Produtores(){
    const [titulo, lista] = useProdutores();
    // const [titulo, setTituto] = useState('');
    // const [lista, setLista] = useState([]);
    // useEffect(() => {
    //     const retorno = carregaProdutores();
    //     setTituto(retorno.titulo);
    //     setLista(retorno.lista);
    // },[]);

    const TopoLista = () => {
        return <Text style={styles.titulo}>{titulo}</Text>
        };

    return (
    <FlatList
    data={lista}
    renderItem={({item}) => <Produtor {...item}/>}
    keyExtractor={({nome}) =>nome}
    ListHeaderComponent={TopoLista}/>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
});
