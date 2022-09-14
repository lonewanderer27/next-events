import MainHeader from "./Main-Header"

export default function Layout(props) {
    return (
        <>
            <MainHeader/>
            <main>
                {props.children}
            </main>
        </>
    )
}