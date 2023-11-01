import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Auth from "../screens/Auth";

function AuthRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();

    return(

        <Navigator  screenOptions={{headerShown: false}}>
              <Screen name="dashboard" component={Auth}/>
          
        </Navigator>

    )

}

export default AuthRoutes