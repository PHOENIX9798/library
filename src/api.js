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
export const GetUserList = ()=> {
  return axios.get('/api/userList');
}
export const GetMyBooks = (userId)=> {
  return axios.get(`/api/myBooks?userId=${userId}`);
}
export const TakeBook = para => {
  return axios.post('/api/takeBook',para);
}
export const BackBook = para => {
  return axios.post('/api/backBook',para);
}
export const ToLogin = para => {
  return axios.post('/api/login',para);
}
export const SignIn = para => {
  return axios.post('/api/signIn',para);
}