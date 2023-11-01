import { useNavigation, useRoute } from "@react-navigation/native"
import { Button, Text, View } from "react-native"

function Team(){

    const route = useRoute()
    const navigation = useNavigation()
    const {team, comment} = route.params
    
    

    handleHome = () => {
        navigation.navigate('placar')
    }

    handleVoltar = () => {
        navigation.goBack()
    }

    return(
        <View>
            <Text>Área do Time {team}</Text>

            <Text>Comentário</Text>
            <Text>{comment}</Text>

            <Button onPress={handleHome} title="Home"></Button>
            <Button onPress={handleVoltar} title="Voltar"></Button>
        </View>
    )

}

export default Team