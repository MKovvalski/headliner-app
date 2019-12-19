import produce from 'immer'

import { PayloadRange } from '../../actions/toReads/types'

import { ToReadsStoreStateInterface } from '../types'

import { HEADLINER_STATUSES } from '../../actions/consts'

export const addHeadliner = (
  state: ToReadsStoreStateInterface,
  payload: PayloadRange
): ToReadsStoreStateInterface => {
  return produce(state, ({ toReads, totalResults, ...rest }) => {
    const newResultsLength = toReads.unshift(payload)
    return {
      toReads: toReads,
      totalResults: newResultsLength,
      ...rest
    }
  })
}

// TODO: update methods below with safe guards to smooth typing
export const changeHeadlinerStatus = (
  state: ToReadsStoreStateInterface,
  payload: PayloadRange
) => {
  return produce(
    state,
    (
      {
        toReads,
        beenReads,
        toDeletes,
        ...rest }) => {
      toReads.forEach((headliner) => {
        if (headliner.title == payload.identifier) {

          headliner.status = payload.status

          switch (payload.status) {
            case HEADLINER_STATUSES.beenRead:
              beenReads = beenReads + 1
              break;
            case HEADLINER_STATUSES.toDelete:
              toDeletes = toDeletes + 1
              break;
          }
        }
      })

      return {
        toReads,
        beenReads,
        toDeletes,
        ...rest
      }
    })
}

export const removeHeadlinerFromList = (
  state: ToReadsStoreStateInterface,
  payload: PayloadRange
) => {
  return produce(state, ({ toReads, totalResults, toDeletes, beenReads, ...rest }) => {
    const index = toReads.indexOf(payload.identifier);
    const headliner = toReads[index]

    switch (headliner.status) {
      case HEADLINER_STATUSES.beenRead:
        beenReads = beenReads - 1
        break;
      case HEADLINER_STATUSES.toDelete:
        toDeletes = toDeletes - 1
        break;
    }

    if (index !== -1) {
      toReads.splice(index, 1);
    }

    return {
      toReads,
      beenReads,
      toDeletes,
      ...rest
    }
  })
}