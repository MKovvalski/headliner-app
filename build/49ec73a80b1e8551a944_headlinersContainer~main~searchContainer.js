(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(module,exports,__webpack_require__){"use strict";eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst axios_1 = __importDefault(__webpack_require__(68));\nconst consts_1 = __webpack_require__(2);\nconst config_1 = __webpack_require__(35);\nexports.buildRequest = ({ url, params, method = 'GET' }) => {\n    return axios_1.default({\n        baseURL: config_1.API_URL,\n        headers: { 'X-Api-Key': config_1.API_KEY },\n        method,\n        url,\n        params\n    });\n};\nexports.formatHeadersResponseData = (responsePayload) => {\n    const { totalResults, articles } = responsePayload;\n    const headliners = articles.map(({ source, content, ...rest }) => {\n        return {\n            status: consts_1.HEADLINER_STATUSES.toRead,\n            source: source.name,\n            ...rest\n        };\n    });\n    return {\n        totalResults,\n        headliners\n    };\n};\nexports.formatSourcesResponseData = (responsePayload) => {\n    const { sources } = responsePayload;\n    return {\n        sources: sources.map(({ id, name }) => ({ value: id, label: name }))\n    };\n};\n\n\n//# sourceURL=webpack:///./src/utils/api/apiMethods.ts?")},2:function(module,exports,__webpack_require__){"use strict";eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// headliners list action names\nexports.GET_HEADLINERS = 'GET_HEADLINERS';\nexports.APPEND_HEADLINERS = 'APPEND_HEADLINERS';\nexports.REFRESH_HEADLINERS = 'REFRESH_HEADLINERS';\n// to-read action names\nexports.GET_TO_READ_LIST = 'GET_TO_READ_LIST';\nexports.ADD_HEADLINER_TO_LIST = 'ADD_HEADLINER_TO_LIST';\nexports.REMOVE_HEADLINER_FROM_LIST = 'REMOVE_HEADLINER_FROM_LIST';\nexports.CHANGE_HEADLINER_STATUS = 'CHANGE_HEADLINER_STATUS';\nexports.HEADLINER_STATUSES = {\n    toRead: 0,\n    beenRead: 1,\n    toDelete: 2,\n};\n// sources action names\nexports.SET_SOURCES = 'SET_SOURCES';\nexports.SET_CHOSEN_SOURCES = 'SET_CHOSEN_SOURCES';\n// searchParams action names\nexports.SET_PARAMETERS = 'SET_PARAMETERS';\n// ui action names\nexports.SET_LOADING_STATE = 'SET_LOADING_STATE';\nexports.LOADING_STATUSES = {\n    loading: 'loading',\n    success: 'success',\n    error: 'error',\n    initial: null\n};\n\n\n//# sourceURL=webpack:///./src/store/actions/consts.ts?")},24:function(module,exports,__webpack_require__){"use strict";eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(5);\nconst actions_1 = __webpack_require__(25);\nconst consts_1 = __webpack_require__(2);\nconst api_1 = __webpack_require__(26);\nconst apiMethods_1 = __webpack_require__(16);\nconst actions_2 = __webpack_require__(85);\nexports.OperationType = {\n    add: 'add',\n    append: 'append'\n};\nconst formatDataForRequest = (sources) => {\n    return sources.map(({ value }) => value).join(',');\n};\nconst useHeadlinersRequest = () => {\n    const pageCount = react_redux_1.useSelector(({ ui }) => ui.pageCount);\n    const loadingHeadliners = react_redux_1.useSelector(({ ui }) => ui.loadingHeadliners);\n    const sources = react_redux_1.useSelector(({ sources }) => sources.sources);\n    const chosenSources = react_redux_1.useSelector(({ sources }) => sources.chosenSources);\n    const dispatch = react_redux_1.useDispatch();\n    const triggerRequest = async (operationType) => {\n        dispatch(actions_1.setUIState({ loadingHeadliners: consts_1.LOADING_STATUSES.loading }));\n        try {\n            const sourcesToFormat = !!chosenSources.length ? chosenSources : sources;\n            const formattedSources = formatDataForRequest(sourcesToFormat);\n            let newPageCount = pageCount;\n            let requestData = null;\n            let action = null;\n            switch (operationType) {\n                case exports.OperationType.add:\n                    dispatch(actions_2.overrideHeadliners());\n                    const addResponseData = await api_1.requestHeadlines({ sources: formattedSources });\n                    newPageCount = 1;\n                    requestData = addResponseData.data;\n                    action = actions_2.getHeadliners;\n                    break;\n                case exports.OperationType.append:\n                    newPageCount++;\n                    const appendResponseData = await api_1.requestHeadlines({ sources: formattedSources, page: newPageCount });\n                    requestData = appendResponseData.data;\n                    action = actions_2.appendHeadliners;\n                    break;\n            }\n            const formattedData = apiMethods_1.formatHeadersResponseData(requestData);\n            dispatch(action(formattedData));\n            dispatch(actions_1.setUIState({ loadingHeadliners: consts_1.LOADING_STATUSES.success, pageCount: newPageCount }));\n        }\n        catch (e) {\n            dispatch(actions_1.setUIState({ loadingHeadliners: consts_1.LOADING_STATUSES.error, pageCount: 0 }));\n        }\n    };\n    return {\n        status: loadingHeadliners,\n        triggerRequest\n    };\n};\nexports.default = useHeadlinersRequest;\n\n\n//# sourceURL=webpack:///./src/hooks/useHeadlinersRequest.tsx?")},25:function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nconst consts_1 = __webpack_require__(2);\nexports.setUIState = (payload) => ({\n    type: consts_1.SET_LOADING_STATE,\n    payload\n});\n\n\n//# sourceURL=webpack:///./src/store/actions/ui/actions.ts?')},26:function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nconst apiMethods_1 = __webpack_require__(16);\nconst config_1 = __webpack_require__(35);\nexports.requestSources = (params) => apiMethods_1.buildRequest({ url: config_1.SOURCES_URL, params });\nexports.requestHeadlines = (params) => apiMethods_1.buildRequest({ url: config_1.HEADLINES_URL, params });\n\n\n//# sourceURL=webpack:///./src/utils/api/api.ts?')},35:function(module,exports,__webpack_require__){"use strict";eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.API_KEY = 'b88bcd6cb83d4335ba3dbfd7227a1c07';\nexports.API_URL = 'https://newsapi.org/v2/';\nexports.HEADLINES_URL = '/top-headlines';\nexports.SOURCES_URL = '/sources';\n\n\n//# sourceURL=webpack:///./config.ts?")},85:function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nconst consts_1 = __webpack_require__(2);\nexports.getHeadliners = (payload) => ({\n    type: consts_1.GET_HEADLINERS,\n    payload\n});\nexports.appendHeadliners = (payload) => ({\n    type: consts_1.APPEND_HEADLINERS,\n    payload\n});\nexports.overrideHeadliners = () => ({\n    type: consts_1.REFRESH_HEADLINERS\n});\n\n\n//# sourceURL=webpack:///./src/store/actions/headliners/actions.ts?')}}]);