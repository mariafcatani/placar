import { Text, View } from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Cards';

export function Home(){

    return (
        <View>
            <Text style={styles.title}>JOGOS</Text>

            <Header rodada='29ª RODADA'/>

            <View>
                <Card      
                    stadium="Arena Grêmio" 
                    date="25/10 - Ontem - 21:30"
                    teamHome="Grêmio"
                    scoreHome="3"
                    teamVisited="Flamengo"
                    scoreVisited="2"/>
                <Card 
                    stadium="Arena Grêmio" 
                    date="25/10 - Ontem - 21:30"
                    teamHome="Palmeiras"
                    scoreHome="5"
                    teamVisited="São Paulo"
                    scoreVisited="0"/>
                <Card 
                    stadium="Arena Grêmio" 
                    date="25/10 - Ontem - 21:30"
                    teamHome="Athletico-PR"
                    scoreHome="10"
                    teamVisited="Flamengo"
                    scoreVisited="0"/>                  
             </View>
        </View>
    )
}

export default Home