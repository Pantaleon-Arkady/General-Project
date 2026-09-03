import { useState } from "react";
import PersonalData from "../coc/PersonalData";

function Demo() {
    const [cocData, showCocData] = useState(false);

    return (
        <>
            <div className="app_page">
                Demo Page
                <button
                    className="btn btn-primary"
                    onClick={() => showCocData(true)}
                >
                    Show Data
                </button>
                <div>
                    {cocData && <PersonalData
                        onClose={() => showCocData(false)}
                    />}
                </div>
            </div>
        </>
    )
}

export default Demo;