/* eslint-disable react/display-name */
const MDXComponents = {
    inlineCode: (props: any) => {
        return <code style={{ backgroundColor: 'yellow' }}>{props.children}</code>
    },
}

export default MDXComponents
