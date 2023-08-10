import {Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Toolbar} from "@react-native-ui-components/toolbar";

export default function App() {
	return (
		<SafeAreaProvider>
			<Toolbar>
				<Text>Hey</Text>
			</Toolbar>
		</SafeAreaProvider>
	);
}
