import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const DarkThemeToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const Icon = colorMode === "dark" ? <SunIcon /> : <MoonIcon />;
    const invertColor = { light: "black", dark: "white" }[colorMode];

    return (
        <IconButton
            aria-label="Toggle to Dark"
            icon={Icon}
            onClick={toggleColorMode}
            color={invertColor}
        />
    )
}

export default DarkThemeToggler;