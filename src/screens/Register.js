import React from 'react';
import SiginupComponent from '../components/signUp';
import envs from '../config/env';
import register from '../context/actions/auth/register';
import axiosInstance from '../helpers/axiosInterceptor';

function Register() {
  const [form, setForm] = React.useState({});
  const [error, setError] = React.useState({});

  React.useEffect(() => {
    axiosInstance.post('/admin/adminLogin').catch(err => {
      console.log('err', err);
    });
  }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value != '') {
      if (name == 'password') {
        if (value.length < 6) {
          setError(prev => {
            return {
              ...prev,
              [name]: 'This field should contain aleast 6 charector',
            };
          });
        } else {
          setError(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setError(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setError(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setError(prev => {
        return {...prev, userName: 'Please add username'};
      });
    }
    if (!form.firstName) {
      setError(prev => {
        return {...prev, firstName: 'Please add firstname'};
      });
    }
    if (!form.lastName) {
      setError(prev => {
        return {...prev, lastName: 'Please add lastname'};
      });
    }
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'Please add email'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'Please add password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(error).every(item => !item)
    ) {
      console.log('obje', form);
      register(form);
    }
  };

  return (
    <SiginupComponent
      onChangeVal={onChange}
      form={form}
      error={error}
      onSubmit={onSubmit}
    />
  );
}

export default Register;
