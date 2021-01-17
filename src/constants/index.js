export const years = [
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
];

export const options = ['true', 'false'];

export const BASE_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';


export const mockData = [
  {
    links: {
      mission_patch_small: '',
    },
    mission_name: 'ABC',
    launch_year: 2006,
    mission_id: ['SADADDS'],
    launch_success: true,
    rocket: {
      first_stage: {
        cores: [
          {
            land_success: false,
          },
        ],
      },
    },
  },
  {
    links: {
      mission_patch_small: '',
    },
    mission_name: 'BSD',
    launch_year: 2020,
    mission_id: ['HGJH'],
    launch_success: true,
    rocket: {
      first_stage: {
        cores: [
          {
            land_success: true,
          },
        ],
      },
    },
  },
];
