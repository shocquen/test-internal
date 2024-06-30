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
	_selected: {
		bg: "gray.200",
		border: "3px solid #16495133",
	},
	_active: {
		bg: "gray.200",
		border: "3px solid #16495133",
	},
	_focus: {
		bg: "gray.200",
		border: "3px solid #16495133",
	},
});
const brandAction = defineStyle({
	bg: "brand.500",
	color: "brand.50",
	width: "full",
	p: "10px 16px",
	borderRadius: "14px",
	fontsize: "xs",
	_hover: {
		bg: "teal.600",
	},
});

export const buttonTheme = defineStyleConfig({
	variants: { brandPrimary, brandAction },
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
