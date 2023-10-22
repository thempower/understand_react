export function Logger(props) {
    const date = new Date();
    console.log(`Kompoment stworzony o ${date.getHours()} : ${date.getMinutes()}`)
    return 
    <>{props.children}
    </>
}