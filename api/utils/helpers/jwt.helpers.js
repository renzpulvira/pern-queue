/**
 * Gets Username & Secret Token to generate a Jwt Web Token
 *
 * @param  {} username
 * @param  {} token
 * @return {object} Returns an object containing jwt token
 */
function generateAccessToken(username, token) {
  return jwt.sign({ name: username }, token, {
    expiresIn: "15s",
  });
}

module.exports = {
  generateAccessToken,
};
