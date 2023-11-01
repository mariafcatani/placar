import { useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"

function Details(){

    const [comment, setComment] = useState('')
    const route = useRoute()
    const navigation = useNavigation()
    const {id, home, visited}= route.params
    const param = route.params
    

    handleBack = () =>{
        navigation.goBack()
    }
    
    handleTeam = () =>{
        navigation.navigate('team', {team, comment})
    }
    
    return(
        <View>
            <Text>{param.id}</Text>

            <Text onPress={() => handleTeam(home)}>{home}</Text>
            <Text>x</Text>
            <Text onPress={() => handleTeam(visited)}>{visited}</Text>

            {setComment}
            <TextInput onChangeText={setComment}/>
        
            <Button title="Voltar" onPress={handleBack}/>

        </View>
    )
}

export default Details