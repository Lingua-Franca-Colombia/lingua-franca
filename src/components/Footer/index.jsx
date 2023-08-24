import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function SmallWithSocial() {
	return (
		<Box color={"brand.label"}>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Text>
					© 2023 Julian Alejandro Torres Morales. Todos los derechos reservados
				</Text>
				<Stack direction={"row"} spacing={6}>
					<SocialButton
						label={"Twitter"}
						target="_blank"
						href={"https://twitter.com/jalejotorresm"}
					>
						<FaTwitter />
					</SocialButton>
					<SocialButton
						label={"Linkedin"}
						target="_blank"
						href={"https://www.linkedin.com/in/jalejotorresm5286/"}
					>
						<FaLinkedin />
					</SocialButton>
					<SocialButton
						label={"Instagram"}
						target="_blank"
						href={"https://www.instagram.com/linguafranca5286/"}
					>
						<FaInstagram />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}
