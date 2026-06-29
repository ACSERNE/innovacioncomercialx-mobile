import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Registro from "../screens/Registro";
import EnviarCodigo from "../screens/EnviarCodigo";
import CodigoVerificacion from "../screens/CodigoVerificacion";

import Dashboard from "../screens/Dashboard";
import Sincronizacion from "../screens/Sincronizacion";
import EstadoBackend from "../screens/EstadoBackend";

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="EnviarCodigo" component={EnviarCodigo} />
        <Stack.Screen name="CodigoVerificacion" component={CodigoVerificacion} />

        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Sincronizacion" component={Sincronizacion} />
        <Stack.Screen name="EstadoBackend" component={EstadoBackend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
