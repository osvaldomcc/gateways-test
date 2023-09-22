import { IconPlugConnected } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import Card from '@/sections/app/components/Card';
import Button from '@/sections/app/components/Button';
import TextField from '@/sections/app/components/TextField';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__info}>
        <div className={styles.logo}>
          <IconPlugConnected size={60} className={styles.logo__icon} />
          <h1>Gateways</h1>
        </div>
        <div className={styles.addorn__one}></div>
        <div className={styles.addorn__two}></div>
      </div>
      <div className={styles.login__section}>
        <div className={styles.login__card}>
          <Card>
            <div className={styles.login__form}>
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  type="text"
                  placeholder="Introduce your username"
                />
                <Button type="submit" variant="primary">
                  LOGIN
                </Button>
              </form>
            </div>
          </Card>
        </div>
        <div className={styles.circle__one}></div>
        <div className={styles.circle__two}></div>
      </div>
    </div>
  );
};

export default LoginPage;
