import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI }: IPage) {
    const slide4 = require("../../assets/slide1.png")
    const slide4Texts = [
        { id: '1', text: 'Creme de Avelã'},
        { id: '2', text: 'Doce de Leite'},
        { id: '3', text: 'Chantilly'},
        { id: '4', text: 'Leite em Pó'},
        { id: '5', text: 'Marshmallow Tostado'},
    ]
    return (
        <ImageBackground source={slide4} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Adicionais' />
                <FlatList
                    data={slide4Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={true}/>
            </View>
        </ImageBackground>
    );
}