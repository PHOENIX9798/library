import axios from 'axios'
export const GetBookList = (page,limit,searchValue)=> {
  return axios.get(`/api/bookList?page=${page}&limit=${limit}&searchValue=${searchValue}`);
}
export const AddBook = para => {
  return axios.post('/api/addBook',para);
}
export const DelBook = para => {
  return axios.delete('/api/delBook',para);
}
export const EditBook = para => {
  return axios.post('/api/editBook',para);
}

export const GetUserList = ()=> {
  return axios.get('/api/userList');
}
export const AddUser = para => {
  return axios.post('/api/addUser',para);
}
export const EditUser = para => {
  return axios.post('/api/editUser',para);
}
export const DelUser = para => {
  return axios.post('/api/delUser',para);
}

export const GetPicList = ()=> {
  return axios.get('/api/picList');
}
export const TakeBook = para => {
  return axios.post('/api/takeBook',para);
}
export const BackBook = para => {
  return axios.post('/api/backBook',para);
}
// // 工种类别
// export const GetWorkerClassList = (para) => {
//     return axios.get('/api/workerclass/list', { params: para });
// }
// export const GetWorkerClassById = (id) => axios.get(`/api/workerclass/${id}`);
// export const AddWorkerClassInfo = para => axios.post('/api/workerclass', para);
// export const EditWorkerClassInfo = para => axios.put('/api/workerclass', para);
// export const DelWorkerClassInfo = id => axios.delete(`/api/workerclass/${id}`);

// // 产品类别
// export const GetProducClassList = (para) => {
//     return axios.get('/api/productclass/list', { params: para });
// }
// export const GetProductClassById = (id) => axios.get(`/api/productclass/${id}`);
// export const AddProductClass = para => axios.post('/api/productclass', para);
// export const EditProductClass = para => axios.put('/api/productclass', para);
// export const DelProductClass = (id) => axios.delete(`/api/productclass/${id}`);

// // 服务类别
// export const GetServiceClassList = (para) => {
//     return axios.get('/api/serviceclass/list', { params: para });
// }
// export const GetServiceClassById = (id) => axios.get(`/api/serviceclass/${id}`);
// export const AddServiceClass = para => axios.post('/api/serviceclass', para);
// export const EditServiceClass = para => axios.put('/api/serviceclass', para);
// export const DelServiceClass = (id) => axios.delete(`/api/serviceclass/${id}`);
// export const AddPic = (id,img) => axios.put(`/api/serviceclass/updateImg?id=${id}&image=${img}`);
// export const DeletePic = (id) => axios.delete(`/api/serviceclass/deletedImg?id=${id}`);

// export const GetSubServiceClassList = (para) => {
//     return axios.get('/api/servicesubject/list', { params: para });
// }
// export const GetServiceChildClassById = (id) => axios.get(`/api/servicesubject/${id}`);
// export const AddServiceChildClass = para => axios.post('/api/servicesubject', para);
// export const EditServiceChildClass = para => axios.put('/api/servicesubject', para);
// export const DelServiceChildClass = (id) => axios.delete(`/api/servicesubject/${id}`);
// export const AddSubPic = (id,img) => axios.put(`/api/servicesubject/updateImg?id=${id}&image=${img}`);
// export const DeleteSubPic = (id) => axios.delete(`/api/servicesubject/deletedImg?id=${id}`);

// // 设备类别
// export const GetDeviceClassList = (para) => {
//     return axios.get('/api/deviceclass/list', { params: para });
// }

// export const AddDeviceClass = para => axios.post('/api/deviceclass', para);
// export const GetDeviceClassById = (id) => axios.get(`/api/deviceclass/${id}`);
// export const EditDeviceClass = (para) => axios.put('/api/deviceclass', para);
// export const DelDeviceClass = (id) => axios.delete(`/api/deviceclass/${id}`);