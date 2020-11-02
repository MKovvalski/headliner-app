import React, { useState, useEffect } from "react";

const InformationModal: React.FC = () => {
    const [modalOpen, toggleModal] = useState<boolean>(true);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    useEffect(() => {
        const rootTag = document.querySelector("html");
        const bodyTag = document.querySelector("body");
        const windowHeight = window.innerHeight;

        if (rootTag && bodyTag && modalOpen) {
            document.documentElement.style.setProperty("--height", `${windowHeight}px`);
            rootTag.classList.add("root-locked-height");
            if (isIOS) {
                rootTag.classList.add("root-locked-height--safari");
            }
            bodyTag.classList.add("body-locked-height");
        }

        if (rootTag && bodyTag && !modalOpen) {
            rootTag.classList.remove("root-locked-height");
            if (isIOS) {
                rootTag.classList.remove("root-locked-height--safari");
            }
            bodyTag.classList.remove("body-locked-height");
        }
    }, [modalOpen]);

    const overLayClassNames = `overlay ${isIOS ? "overlay--safari" : ""}`;

    return modalOpen ? (
        <div className={overLayClassNames}>
            <main className="modal">
                <h1 className="modal__title">Farewell to headliners project</h1>
                <p className="modal__description">
                    The Headliners app was a pet project of mine utilizing unpaid access to the{" "}
                    <a className="modal__link" target="_blank" rel="noreferrer" href="https://newsapi.org">
                        News API
                    </a>
                    . The last changes in the NewsAPI policy unfortunately make such access no longer
                    available. Due to that change, I am forced to temporarily halt further works on the app
                    and focus on finding the replacement for now unavailable NewsAPI.
                </p>
                <button className="button" onClick={toggleModal.bind(null, false)}>
                    I Understand
                </button>
            </main>
        </div>
    ) : null;
};

export default InformationModal;
