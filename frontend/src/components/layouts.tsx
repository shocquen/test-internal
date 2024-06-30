import { VStack, Button, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";
import BrandTitle from "./brandTitle";
import Hero from "./hero";

interface PrimaryLayoutProps {
	heading: string;
	text: string;
	buttonText: string;
	bgUrl?: string;
	children: ReactNode;
}

export function PrimaryLayout({
	heading,
	text,
	buttonText,
	bgUrl,
	children,
}: PrimaryLayoutProps) {
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
				isDisabled={true}
				width="100%"
				pt="10px"
				pb="10px"
				borderRadius="14px"
				fontSize="xs"
			>
				{buttonText}
			</Button>
		</VStack>
	);
}
