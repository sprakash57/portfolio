import { Box, Button, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StickyNav } from "../styles/NavMenu";
import DarkThemeToggler from "./DarkThemeToggler";

const NavMenu = () => {
    const { colorMode } = useColorMode();
    const router = useRouter();

    const bgColor = { light: "white", dark: "black" }[colorMode];
    const hoverBgColor = { light: "gray.100", dark: "gray.700" }[colorMode];

    return (
        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth="356px"
            width="100%"
            bg={bgColor}
            as="nav"
            px={6}
            py={2}
            mt={8}
            mb={[null, 0, 8]}
            mx="auto"
            display={['none', 'flex', 'flex']}
        >
            <DarkThemeToggler />
            <Box as="section">
                <Link href="/" passHref>
                    <Button
                        as="a"
                        aria-label="Highlights"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: hoverBgColor }}
                        backgroundColor={router.pathname === "/statistics" ? hoverBgColor : ""}
                    >/</Button>
                </Link>
                <Link href="/blogs" passHref>
                    <Button
                        as="a"
                        aria-label="Blogs"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: hoverBgColor }}
                    >Blogs</Button>
                </Link>
                <Link href="/projects" passHref>
                    <Button
                        as="a"
                        aria-label="Projects"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: hoverBgColor }}
                    >Projects</Button>
                </Link>
                <Link href="/about" passHref>
                    <Button
                        as="a"
                        aria-label="About"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ backgroundColor: hoverBgColor }}
                    >About</Button>
                </Link>
            </Box>
        </StickyNav>
    )
}

export default NavMenu;