/**
 * This checks a string in the selected model
 * to find the `name` if it exists in the database.
 *
 * @param {class} model - Model from Postgres
 * @param {string} name - The name of the User
 * @return {object} returns a boolean if User Exists
 */

function checkUserExists(model, name) {
  return model.findOne({ where: { name } });
}

module.exports = { checkUserExists };
