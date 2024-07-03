import { Spacer, VStack, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BrandTitle from "../components/brandTitle";
import { useEffect } from "react";

const Confirmation: React.FC = () => {
	const navigate = useNavigate();
	const userType = localStorage.getItem("userType");

	useEffect(() => {
		if (!userType) {
			console.log("Redirecting due to invalid state...");
			navigate("/");
		}
	});

	const confirmButton = () => navigate("/email");

	return (
		<VStack
			bgImage={"../../public/back2.png"}
			bgPosition="top"
			bgRepeat="no-repeat"
			bgSize="contain"
			height="100svh"
			p="16px"
			pt="500px"
		>
			<BrandTitle p="8px" />
			<Heading textAlign="center" fontSize="36px" fontWeight={700} p="0 54px">
				{(userType == "agent" && "Simplifiez votre gestion locative") ||
					"Trouvez votre chez-vous"}
			</Heading>
			<Spacer />
			<Button id="confirmButton" variant="brandAction" onClick={confirmButton}>
				Connexion rapide
			</Button>
		</VStack>
	);
};

export default Confirmation;
