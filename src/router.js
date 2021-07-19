import React from 'react';
import StatusForm from './Component/StatusForm/StatusForm';
import StatusList from './Component/StatusList/StatusList';
const routes=[
      {
        path:'/addstatus',
       exact:true,
       main: ({history})=> <StatusForm history={history} />
        },
        {
            path:'/managerstatus',
            exact:true,
            main: ()=> <StatusList  />
        },
];
export default routes;