import React from "react";

interface Props extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
> {
    label?: string;
    as?: string;
    children?: React.ReactNode;
}

const Header = ({ children, as = "h2", label, ...attr }: Props) => {
    let content = React.createElement("header", { ...attr }, children);

    if (as) content = React.createElement(
        "header",
        { ...attr },
        React.createElement(as, null, label)
    )

    return content;
}

export default Header;
