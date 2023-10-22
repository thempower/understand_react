import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";
import { HeadingItalic } from "./components/HeadingItalic";
import { Logger } from "./components/Logger";
const element = (
    <>
        <Logger>
        <HeadingItalic><Link /></HeadingItalic>
        </Logger>
        <main>
            <Link text="sprawdź stronę kursu!" shouldOpenNewTab={true} />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                labore blanditiis magnam eveniet rem ratione, voluptatum nulla
                inventore quaerat necessitatibus.
            </p>
            <Logger>
            <Link  shouldOpenNewTab={false}/>
            </Logger>
        </main>
    </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
