import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { store } from "./store";
import  storePureRedux  from './storePureRedux';
import { Provider } from "react-redux";

import Reducer from './Screens/useReducer';
import Redux from './Screens/Redux';
import ReduxToolkit from './Screens/ReduxToolkit';
import NoteWithReducer from './Screens/NoteWithReducer';
import TodoAppWithRedux from './Screens/TodoAppWithRedux';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='TodoAppWithRedux'>
          <Drawer.Screen name="Reducer" component={Reducer} />
          <Drawer.Screen name="Redux" component={Redux} />
          <Drawer.Screen name="ReduxToolkit" component={ReduxToolkit} />
          <Drawer.Screen name="NoteWithReducer" component={NoteWithReducer} />
          <Drawer.Screen name="TodoAppWithRedux" component={TodoAppWithRedux} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

