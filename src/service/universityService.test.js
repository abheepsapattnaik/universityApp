import axios from 'axios';
import {getUniversities} from './universityService';

jest.mock('axios');
describe('UniversityServiceTest', () => {
    it('should return transformed data on getUniversities', async () => {
        const data = {
            data: [
                {
                    "state-province": "Punjab",
                    "web_pages": ["http://www.davietjal.org/"],
                    "alpha_two_code": "IN",
                    "country": "Country",
                    "name": "DAV Institute of Engineering & Technology",
                    "domains": ["davietjal.org"]
                }
            ]
        };
        const expectedData = [{
            country: "Country",
            name: "DAV Institute of Engineering & Technology",
            state: "Punjab",
            web_page: "http://www.davietjal.org/"
        }]
        const props = {
            loadSuccess: jest.fn(),
            loadError: jest.fn(),
        }

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await getUniversities('country', props);

        expect(axios.get).toHaveBeenCalledWith(
            'http://universities.hipolabs.com/search?country=country',
        );
        expect(props.loadSuccess).toHaveBeenCalledWith(expectedData);
    });

    it('should return error on network failure', async () => {
        const props = {
            loadSuccess: jest.fn(),
            loadError: jest.fn(),
        }

        axios.get.mockImplementationOnce(() => Promise.reject('error'));
        await getUniversities('country', props);

        expect(axios.get).toHaveBeenCalledWith(
            'http://universities.hipolabs.com/search?country=country',
        );
        expect(props.loadError).toHaveBeenCalled();
    });
})