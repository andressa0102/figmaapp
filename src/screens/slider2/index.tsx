import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
    const slide2 = require("../../assets/slide2.png")
    const slide2Texts = [
        { id: '1', text: 'Espresso Americano'},
        { id: '2', text: 'Espresso Duplo'},
        { id: '3', text: 'Espresso Machiato'},
        { id: '4', text: 'Safra Especial'},
        { id: '5', text: 'Regiões Mundo'},
    ]
    return (
        <ImageBackground source={slide2} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Cafés Espressos' />
                <FlatList
                    data={slide2Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={false}/>
            </View>
        </ImageBackground>
    );
}