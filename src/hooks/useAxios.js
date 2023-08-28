import {useState} from "react"
import axios from 'axios'
import {v1 as uuid} from "uuid";

function useAxios(baseUrl, restOfUrl) {
    const [responses, setResponses] = useState([])
    const addResponseData = async () => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, {...response.data, id: uuid()}]);
      };
    
    return [responses, addResponseData];
  }

  export default useAxios