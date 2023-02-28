const UserAPI = require('./page-object/userAPI');
const AuthAPI = require('./page-object/authAPI');

describe('API Test with Jest using Page Object pattern in separate files', () => {
  const userAPI = new UserAPI();
  const authAPI = new AuthAPI();

  it('should return a list of users', async () => {
    const userData = await userAPI.getUsers(2);
    expect(userData).toBeInstanceOf(Object);
    expect(userData.data).toBeInstanceOf(Array);
  });

  it('should return an access token for valid login credentials', async () => {
    const authData = await authAPI.login('eve.holt@reqres.in', 'cityslicka');
    expect(authData).toBeInstanceOf(Object);
    expect(authData).toHaveProperty('token');
  });

  it('should return an error message for invalid login credentials', async () => {
    const response = await authAPI.login('sydney@fife', 'pistol');
    expect(response.status).toEqual(400);
    expect(response.data).toBeInstanceOf(Object);
    expect(response.data).toHaveProperty('error');
  });
});
