import universityReducer, {loadUniversitiesStart, loadUniversitiesSuccess} from "./universityReducer";

describe('universityReducer', () => {
    describe('initial action', () => {
        it('should return initial state when the action is undefined', () => {
            const state = universityReducer(undefined, 'INITIAL STATE');
            expect(state).toEqual({
                error: false,
                loading: false,
                universities: [],
                pageNumber: 1,
                selectedCountry: undefined,
                selectedUniversity: undefined,
            });
            expect(state.run).toBeUndefined();
        });
    });

    describe('loadUniversitySuccessAction', () => {
        it('should make loading true', () => {
            const state = {
                error: false,
                loading: false,
                universities: []
            };
            const newState = universityReducer(state, loadUniversitiesSuccess([{param: 'trial'}]));
            expect(newState).toEqual({
                error: false,
                loading: false,
                pageNumber: 1,
                universities: [{param: 'trial'}]
            })
        });
    });
});