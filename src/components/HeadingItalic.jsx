export function HeadingItalic(props) {

    const date = new Date();
    console.log(`Kompoment stworzony o ${date.getHours()} : ${date.getMinutes()}`)
    
    return <h1><i>{props.children}</i></h1>

}

