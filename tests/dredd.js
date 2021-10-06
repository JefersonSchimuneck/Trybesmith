const childProcess = require('child_process');
const util = require('util');
const path = require('path');
const assert = require('assert');

const SPEC_PATH = path.join(__dirname, 'docs.apib');
const HOOKS_PATH = path.join(__dirname, 'hooks.js');

const exec = util.promisify(childProcess.exec);

const transactions = childProcess
  .execSync(`npx dredd ${SPEC_PATH} http://localhost:3000 --names --no-color`)
  .toString()
  .split('\n')
  .filter((line) => line.startsWith('info:'))
  .map((line) => line.replace('info: ', ''));

const allTransactions = (name) =>
  transactions.filter((transaction) => transaction.startsWith(name));

/**
 * Calls dredd to test an endpoint.
 * @param {string} endpoint Name of the endpoint to be tested
 * @param {string} customParam Custom parameter to be passed to dredd
 */
const callDredd = async (endpoint, customParam) => {
  const endpoints = allTransactions(endpoint);

  if (!endpoints.length) {
    throw new Error(`No transactions found for name ${endpoint}`);
  }

  let command = `npx dredd ${SPEC_PATH} http://localhost:3000 --hookfiles="${HOOKS_PATH}" -e -l error --no-color`;

  command += ` ${endpoints.map((e) => `-x "${e}"`).join(' ')}`;

  if (customParam) command += ` ${customParam}`;

  const { stdout } = await exec(command).catch((err) => {
    const stdout = err.stdout;

    const message = stdout
      .split('\n')
      .filter(
        /**
         * @param {string} line
         */
        (line) =>
          line.trim().startsWith('fail:') || line.trim().startsWith('body:')
      )
      .map((line) => line.replace(/(fail|body)[^ ]* /gi, '').trim())
      .filter((line) => !!line)
      .join('\n');

    throw new Error(message);
  });

  assert(!stdout.includes('fail:'));
};

module.exports = {
  allTransactions,
  callDredd,
};