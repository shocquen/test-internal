import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
	bg: "white",
	width: "full",
	height: "180px",
	display: "flex column",
	justifyContent: "center",
	alignItems: "center",

	_hover: {
		bg: "gray.200",
		border: "3px solid #16495133",
	},
});

export const buttonTheme = defineStyleConfig({
	variants: { brandPrimary },
});

// const brandIcon = defineStyle({
// 	bg: "gray.100",
// 	boxSize: "56px",
// 	p: "14px",
// 	borderRadius: "full",
// });

// export const iconTheme = defineStyleConfig({
// 	variants: { brandIcon },
// });
