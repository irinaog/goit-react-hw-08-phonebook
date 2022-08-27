const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getFetchUser = state => state.auth.isfetchingUser;

const authSelectors = {
    getIsLoggedIn,
    getUserEmail,
    getFetchUser
};

export default authSelectors;