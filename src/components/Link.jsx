const address = "https://zrozumiecreact.pl";
export function Link ({text = address, shouldOpenNewTab}) {
     console.log(text);
    const address = "https//:zrozumiecreact.pl";
    const target = shouldOpenNewTab ? "_blank" : "";
    const rel = shouldOpenNewTab ? "noopener noreferer" : ""
 
    return (
        <a href={address} target={target} rel={rel}>
            {text}
        </a>
    );
}
