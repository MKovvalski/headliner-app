import produce from "immer";

import { IEntryToReadsStore } from "../types";
import { IEntryHeadliner } from "../../actions/headliners/types";
import { IEntryModifyHeadliner, IEntryRemoveHeadliner } from "../../actions/toReads/types";
import { HEADLINER_STATUSES } from "../../actions/consts";

export const addHeadliner = (state: IEntryToReadsStore, payload: IEntryHeadliner): IEntryToReadsStore => {
    return produce(state, ({ toReads, totalResults, ...rest }) => {
        const newResultsLength = toReads.unshift(payload);
        return {
            toReads,
            totalResults: newResultsLength,
            ...rest,
        };
    });
};

export const modifyHeadlinerStatus = (
    state: IEntryToReadsStore,
    payload: IEntryModifyHeadliner,
): IEntryToReadsStore => {
    return produce(state, ({ toReads, beenReads, toDeletes, ...rest }) => {
        toReads.forEach((headliner) => {
            if (headliner.title === payload.title) {
                // eslint-disable-next-line no-param-reassign
                headliner.status = payload.status;

                if (payload.status === HEADLINER_STATUSES.beenRead) {
                    // eslint-disable-next-line no-param-reassign
                    beenReads += 1;
                }

                if (payload.status === HEADLINER_STATUSES.toDelete) {
                    // eslint-disable-next-line no-param-reassign
                    toDeletes += 1;
                }
            }
        });

        return {
            toReads,
            beenReads,
            toDeletes,
            ...rest,
        };
    });
};

export const removeHeadlinerFromList = (
    state: IEntryToReadsStore,
    payload: IEntryRemoveHeadliner,
): IEntryToReadsStore => {
    return produce(state, ({ toReads, totalResults, toDeletes, beenReads, ...rest }) => {
        const index = toReads.findIndex(({ title }) => title === payload.title);
        const headliner = toReads[index];

        if (headliner.status === HEADLINER_STATUSES.toRead) {
            // eslint-disable-next-line no-param-reassign
            totalResults -= 1;
        }

        if (headliner.status === HEADLINER_STATUSES.beenRead) {
            // eslint-disable-next-line no-param-reassign
            beenReads -= 1;
        }

        if (headliner.status === HEADLINER_STATUSES.toDelete) {
            // eslint-disable-next-line no-param-reassign
            toDeletes -= 1;
        }

        if (index !== -1) {
            toReads.splice(index, 1);
        }

        return {
            totalResults,
            toReads,
            beenReads,
            toDeletes,
            ...rest,
        };
    });
};
