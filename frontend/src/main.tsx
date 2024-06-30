import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
	ChakraProvider,
	extendTheme,
	withDefaultColorScheme,
} from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";
import { buttonTheme } from "./components/brand";

const theme = extendTheme(
	{
		components: { Button: buttonTheme },
		colors: {
			brand: {
				50: "#F2F2F2",
				500: "#164951", // for colorScheme
			},
		},
		styles: {
			global: {
				body: {
					bg: "brand.50",
					color: "brand.500",
				},
			},
		},
	},
	withDefaultColorScheme({ colorScheme: "brand" })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
