import axios from 'axios';

export const GetNewRelease = () => {
    axios.post('https://api.itedu.me​/course/top-new', {
        limit: 10,
        page: 1
    })
        .then(function (response) {
            return (response.data.payload);
        })
        .catch(function (error) {
            return (error);
        });
}

