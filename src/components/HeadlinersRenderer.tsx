import React from "react";
import { ENTRY_headliner } from "../store/actions/headliners/types";
import { useSelector } from "react-redux";
import HeadlinerTile from "./HeadlinerTile";
import { RootStore } from "../store/types";

const HeadlinersRenderer: React.FC = () => {
    const headliners: ENTRY_headliner[] = useSelector(({ headliners }: RootStore) => headliners.headliners);

    return (
        <div className="headliners-renderer">
            {headliners.map((headliner) => (
                <HeadlinerTile key={headliner.title} {...headliner} />
            ))}
        </div>
    );
};

export default HeadlinersRenderer;
