import { Flex } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import { Image } from "@chakra-ui/react";

export default function Nav() {
	return (
		<>
			<Flex alignItems={"center"} justifyContent={"center"}>
				<Image src={Logo} alt="Lingua Franca" />
			</Flex>
		</>
	);
}
