import axios from 'axios';
import * as Config from './../contants/Config'

export default function callAPI(endpoint,method='GET',body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: null
      }).then(res=>{
          this.setState({
            tasks: res.data
         });  
            
          
      }).catch(err=>{
          console.log(err);
      })
     }