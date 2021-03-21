import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, logOut } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu({ onLogout }) {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   name: authSelectors.getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
