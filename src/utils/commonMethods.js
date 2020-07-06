export const isUserLoggedIn = () => {
	const jwtToken = localStorage.getItem('jwtToken');
	if (jwtToken) {
		return true;
	}
	return false;
};
