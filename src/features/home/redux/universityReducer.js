export const LOAD_UNIVERSITIES_START_ACTION = 'LOAD_UNIVERSITIES_START_ACTION';
export const LOAD_UNIVERSITIES_SUCCESS_ACTION = 'LOAD_UNIVERSITIES_SUCCESS_ACTION';
export const LOAD_UNIVERSITIES_ERROR_ACTION = 'LOAD_UNIVERSITIES_ERROR_ACTION';
export const CLEAR_NAME_ACTION = 'CLEAR_NAME_ACTION';

export const loadUniversitiesStart = () => ({
    type: LOAD_UNIVERSITIES_START_ACTION
});

export const loadUniversitiesSuccess = (universitiesValue) => (
    {
        type: LOAD_UNIVERSITIES_SUCCESS_ACTION,
        data: universitiesValue
    });

export const loadUniversitiesError = () => ({
    type: LOAD_UNIVERSITIES_ERROR_ACTION
});

export const clearUniversityName = () => ({
    type: CLEAR_NAME_ACTION
});


const initialState = {
    selectedCountry: 'undefined',
    selectedUniversity: 'undefined',
    loading: false,
    universities: [],
    error: false,
};

const universityReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case LOAD_UNIVERSITIES_SUCCESS_ACTION:
                console.log('success', action.data)
                return {...state, universities: action.data, loading: false, error: false};
            case LOAD_UNIVERSITIES_ERROR_ACTION:
                return {...state, loading: false, error: true};
            case CLEAR_NAME_ACTION:
                return {...state, universities: []}
            default:
                return state;
        }
    };

export default universityReducer;