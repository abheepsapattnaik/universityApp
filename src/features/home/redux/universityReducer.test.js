import universityReducer, {loadUniversitiesStart, loadUniversitiesSuccess} from "./universityReducer";

describe('universityReducer', () => {
    describe('initial action', () => {
        it('should return initial state when the action is undefined', () => {
            const state = universityReducer(undefined, 'INITIAL STATE');
            expect(state).toEqual({
                error: false,
                loading: false,
                universities: []
            });
            expect(state.run).toBeUndefined();
        });
    });

    describe('loadUniversityStartAction', () => {
        it('should make loading true', () => {
            const state = {
                error: false,
                loading: false,
                universities: []
            };
            const newState = universityReducer(state, loadUniversitiesStart());
            expect(newState).toEqual({
                error: false,
                loading: true,
                universities: []
            })
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
                universities: [{param: 'trial'}]
            })
        });
    });
});