export default [
  {
    title: 'Dashboard Beta',
    key: 'dashboardBeta',
    url: '/dashboard/beta',
    icon: 'icmn icmn-home',
  },
  {
    divider: true,
  },
  {
    title: 'test',
    key: 'Test',
    icon: 'icmn icmn-file-text',
    children: [
      {
        key: 'uploadFile',
        title: 'Upload File',
        url: '/uploadFile',
      },
      {
        key: 'listInput',
        title: 'List Input',
        url: '/listInput',
      },
    ],
  },
];
