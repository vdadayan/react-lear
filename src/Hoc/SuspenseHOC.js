import React from "react";
import Preloader from "../Components/Preloader/Preloader";

export const SuspenseHOC = (Component) => {
    return (props) => {
        return (<React.Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}
