const { default: axios } = require('axios');

const BASE_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';

/**
 *
 * @route /
 * @description Get all Data
 * @method GET
 */

exports.getSpacexData = async (req, res) => {
  try {
    const data = await axios.get(BASE_URL).then((res) => res.data);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status((err && err.response && err.response.status) || 404).json({
      success: false,
      message: 'Unable to fetch daa',
    });
  }
};

/**
 *
 * @route /filter
 * @description Get all filtered Data
 * @method GET
 */

exports.getFilteredSpacexData = async (req, res) => {
  try {
    const { launch_success, land_success, launch_year } = req.query;

    let URL = BASE_URL;

    if (launch_success) {
      URL += `&launch_success=${launch_success}`;
    }

    if (land_success) {
      URL += `&land_success=${land_success}`;
    }

    if (launch_year) {
      URL += `&launch_year=${launch_year}`;
    }

    const data = await axios.get(URL).then((res) => res.data);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    console.log(err.response);
    res.status((err && err.response && err.response.status) || 404).json({
      success: false,
      message: 'Unable to fetch daa',
    });
  }
};
