import Axios from "axios";

const url = "http://localhost.laravel-lumen-demo";
const authStr =
  "bearer " +
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QubGFyYXZlbC1sdW1lbi1kZW1vXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTcyNjg2NTM2LCJleHAiOjE1NzI2OTAxMzYsIm5iZiI6MTU3MjY4NjUzNiwianRpIjoiY3RHVm05enVPRTd5VGlkeiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.oCBZCXSzqooqMgEBjPIZfRo_FmjDxG94t53Ia7Dc6HY";
const getTodos = async function(link: string) {
  console.log(link);
  try {
    const response = await Axios.get(`${url}${link}`, {
      headers: { Authorization: authStr }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getSteps = async function(link: string) {
  console.log(link);
  try {
    const response = await Axios.get(`${url}${link}`, {
      headers: { Authorization: authStr }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getTasks = async function(link: string) {
  console.log(link);
  try {
    const response = await Axios.get(`${url}${link}`, {
      headers: { Authorization: authStr }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getStatuses = async function(link: string) {
  try {
    const response = await Axios.get(`${url}${link}`, {
      headers: { Authorization: authStr }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const dataService = {
  getTodos,
  getSteps,
  getTasks,
  getStatuses
};
