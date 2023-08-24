import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
	colors: {
		brand: {
			label: "#151515",
			100: "#5e17eb",
			200: "#1bd527",
			300: "#8956F0",
			400: "#5ceb65",
		},
	},
});

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
