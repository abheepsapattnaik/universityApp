export const LOAD_UNIVERSITIES_START_ACTION = 'LOAD_UNIVERSITIES_START_ACTION';
export const LOAD_UNIVERSITIES_SUCCESS_ACTION = 'LOAD_UNIVERSITIES_START_ACTION';
export const LOAD_UNIVERSITIES_ERROR_ACTION = 'LOAD_UNIVERSITIES_START_ACTION';

export const loadUniversitiesStart = () => ({
    type: LOAD_UNIVERSITIES_START_ACTION
});

export const loadUniversitiesSuccess =
    photos => ({
        type: LOAD_UNIVERSITIES_SUCCESS_ACTION,
        photos
    });

export const loadUniversitiesError = () => ({
    type: LOAD_UNIVERSITIES_ERROR_ACTION
});


const initialState = {selectedCountry: '', loading: false};

const universityReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default universityReducer;