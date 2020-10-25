import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store/types";
import { IEntryHeadliner } from "../store/actions/headliners/types";
import HeadlinerTile from "./HeadlinerTile";

const HeadlinersRenderer: React.FC = () => {
    const headlinersList: IEntryHeadliner[] = useSelector(
        ({ headliners }: RootStore) => headliners.headliners,
    );

    return (
        <div className="headliners-renderer">
            {headlinersList.map((headliner) => (
                <HeadlinerTile key={headliner.title} {...headliner} />
            ))}
        </div>
    );
};

export default HeadlinersRenderer;
