const axios = require("axios").default;
const companyConfig = require('./companyConfig');

const axiosWithAuth = (url) => {
    return axios.get(url,
    {
      headers: {
        Authorization: companyConfig.CLEARBIT_TOKEN,
      },
    }
  );
}

module.exports.getCompany = (name) => {
  return axiosWithAuth(`${companyConfig.CLEARBIT_URL}${name}`);
};
