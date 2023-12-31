import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: ContainerProps) => {
  return (
    <Box borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
