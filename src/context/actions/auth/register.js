import axiosInstance from '../../../helpers/axiosInterceptor';

export default ({
  email,
  password,
  username,
  firstName: first_name,
  lastName: last_name,
}) => {
  axiosInstance
    .post('auth/register', {
      email,
      password,
      username,
      first_name,
      last_name,
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
};
