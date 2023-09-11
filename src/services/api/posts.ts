import { useApi } from "../../Hook/useApi";


 // eslint-disable-next-line react-hooks/rules-of-hooks
 const api = useApi();

export async function getAllPosts() {
   
  try {
    const response = await api.get(`posts`);
    return response;
  } catch (error) {
    return error;
  }
}
export async function getOnePost(id) {
  try {
    const response = await api.get(`posts/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function updateOnePost(id:any, body:any) {
  try {
    const response = await api.put(`posts/${id}`,body);
      return {
          status: 200,
          data:body
    }
  } catch (error) {
    return error;
  }
}