module.exports.mockLambda = async (event, context, callback) => {
  console.log(`mockLambda has been executed at ${new Date()}`);
}