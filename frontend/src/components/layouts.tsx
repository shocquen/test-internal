import { VStack, Button, Spacer } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import BrandTitle from "./brandTitle";
import Hero from "./hero";

interface PrimaryLayoutProps {
	heading: string;
	text: string;
	buttonText: string;
	bgUrl?: string;
	isConfirmButtonDisabled?: boolean;
	formData?: object;
	confirmButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children: ReactNode;
}
const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
	heading,
	text,
	buttonText,
	bgUrl,
	isConfirmButtonDisabled = false,
	confirmButton,
	children,
}) => (
	<VStack
		height="100svh"
		p="16px"
		pt="32pxs"
		bgImg={bgUrl ?? "../../public/back.png"}
		bgPosition="top"
		bgRepeat="no-repeat"
		bgSize="contain"
	>
		<BrandTitle p="80px" />
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
export default PrimaryLayout;
