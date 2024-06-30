import { VStack, Button, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";
import BrandTitle from "./brandTitle";
import Hero from "./hero";
import { useNavigate } from "react-router-dom";

interface PrimaryLayoutProps {
	heading: string;
	text: string;
	buttonText: string;
	bgUrl?: string;
	isConfirmButtonDisabled: boolean;
	formData?: object;
	children: ReactNode;
}

export function PrimaryLayout({
	heading,
	text,
	buttonText,
	bgUrl,
	isConfirmButtonDisabled,
	formData,
	children,
}: PrimaryLayoutProps) {
	const navigate = useNavigate();
	const confirmButton = () =>
		navigate("/confirmation", {
			state: formData,
		});
	return (
		<VStack
			height="100svh"
			p="16px"
			pt="32pxs"
			bgImg={bgUrl ?? "../../public/back.png"}
			bgPosition="top"
			bgRepeat="no-repeat"
			bgSize="contain"
		>
			<BrandTitle />
			<Hero heading={heading} text={text} />
			{children}
			<Spacer />
			<Button
				id="confirmButton"
				isDisabled={isConfirmButtonDisabled}
				variant="brandAction"
				onClick={confirmButton}
			>
				{buttonText}
			</Button>
		</VStack>
	);
}
