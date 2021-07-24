import { Flex, useColorMode } from "@chakra-ui/react"
import NavMenu from "./NavMenu";

const Layout = () => {
    const { colorMode } = useColorMode();
    const bgColor = { light: "white", dark: "#15161a" }[colorMode];
    const invertColor = { light: "black", dark: "white" }[colorMode];

    return (
        <>
            <NavMenu />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor}
                color={invertColor}
                px={[0, 4, 4]}
                mt={[0, 8, 8]}
            >
            </Flex>
        </>
    )
}

export default Layout
