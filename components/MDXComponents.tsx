/* eslint-disable react/display-name */
import { Code, Heading } from '@chakra-ui/react';

const MDXComponents = {
    h2: (props: any) => <Heading as="h2" size="xl" my={4} {...props} />,
    inlineCode: (props: any) => <Code colorScheme="yellow" fontSize="0.84em" {...props} />,
}

export default MDXComponents
