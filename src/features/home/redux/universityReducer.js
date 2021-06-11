export const LOAD_UNIVERSITIES_SUCCESS_ACTION = 'LOAD_UNIVERSITIES_SUCCESS_ACTION';
export const LOAD_UNIVERSITIES_ERROR_ACTION = 'LOAD_UNIVERSITIES_ERROR_ACTION';
export const UPDATE_NAME_ACTION = 'UPDATE_NAME_ACTION';
export const PAGE_CHANGE = 'PAGE_CHANGE';


export const loadUniversitiesSuccess = (universitiesValue) => (
    {
        type: LOAD_UNIVERSITIES_SUCCESS_ACTION,
        data: universitiesValue
    });

export const loadUniversitiesError = () => ({
    type: LOAD_UNIVERSITIES_ERROR_ACTION
});

export const updatePageNumber = (pageNumber) => ({
    type: PAGE_CHANGE,
    data: pageNumber
});

export const updateSelectedCountry = (countryName) => ({
    type: UPDATE_NAME_ACTION,
    data: countryName
});


const initialState = {
    selectedCountry: undefined,
    pageNumber: 1,
    loading: false,
    universities: [],
    error: false,
};

const universityReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case LOAD_UNIVERSITIES_SUCCESS_ACTION:
                return {...state, universities: action.data, pageNumber: 1, loading: false, error: false};
            case LOAD_UNIVERSITIES_ERROR_ACTION:
                return {...state, loading: false, error: true, universities: []};
            case UPDATE_NAME_ACTION:
                return {
                    ...state,
                    selectedCountry: action.data,
                    loading: !!action.data.length,
                    universities: !!action.data.trim.length ? state.universities : [],
                    pageNumber: !!action.data.trim.length ? state.pageNumber : 1
                }
            case PAGE_CHANGE:
                return {...state, pageNumber: action.data}
            default:
                return state;
        }
    };

export default universityReducer;