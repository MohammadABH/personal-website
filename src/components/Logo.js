import React from 'react';
import { Box, Image } from "@chakra-ui/react";

import avatar from "../images/avatar.jpg"

const Logo = () => {
	return (
		<Box>
			<Image src={avatar} borderRadius="50%" inlineSize="20"/> 
		</Box>
	);
};

export default Logo;