import React, { useEffect, useState } from "react";


const InstallPWA = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        // @ts-ignore
        const handler = e => {
            e.preventDefault();

            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    // @ts-ignore
    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };
    if (!supportsPWA) {
        return null;
    }
    return (
        <a href=""
            className=""
            id="setup_button"
            aria-label="Install app"
            title="Install app"
            onClick={onClick}
        >
            <span className="material-symbols-outlined">
ios_share
</span>
        </a>
    );
};

export default InstallPWA;