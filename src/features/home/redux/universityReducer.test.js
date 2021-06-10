import universityReducer, {loadUniversitiesSuccess, updatePageNumber, updateSelectedCountry} from "./universityReducer";

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
    describe('updateCountryNamesAction', () => {
        it('should make loading true, reset page number, universities on change', () => {
            const state = {
                error: false,
                loading: false,
                selectedCountry: 'india',
                universities: [{param: 'trial'}],
                pageNumber: 2,
            };
            const newState = universityReducer(state, updateSelectedCountry('us'));
            expect(newState).toEqual({
                error: false,
                loading: true,
                pageNumber: 1,
                selectedCountry: 'us',
                universities: []
            })
        });

        it('should make loading true, reset page number, universities on clearing name', () => {
            const state = {
                error: false,
                loading: false,
                selectedCountry: 'india',
                universities: [{param: 'trial'}]
            };
            const newState = universityReducer(state, updateSelectedCountry(''));
            expect(newState).toEqual({
                error: false,
                loading: false,
                pageNumber: 1,
                selectedCountry: '',
                universities: []
            })
        });
    });
    describe('pageUpdatesAction', () => {
        it('should make loading false, reset page number on change', () => {
            const state = {
                error: false,
                loading: false,
                selectedCountry: 'india',
                universities: [{param: 'trial'}],
                pageNumber: 2,
            };
            const newState = universityReducer(state, updatePageNumber(3));
            expect(newState).toEqual({
                error: false,
                loading: false,
                pageNumber: 3,
                selectedCountry: 'india',
                universities: [{param: 'trial'}],
            })
        });

    });
});