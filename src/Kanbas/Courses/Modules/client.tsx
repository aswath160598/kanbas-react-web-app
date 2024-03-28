import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
// const MODULES_API = `${API_BASE}/api/modules`;
// const COURSES_API = `${API_BASE}/api/courses`;
const COURSES_API = "http://localhost:4000/api/courses";
const MODULES_API = "http://localhost:4000/api/modules";

interface Module {
    _id: string;
    name: string;
    description: string;
}
export const updateModule = async (module: Module) => {
    const response = await axios.
      put(`${MODULES_API}/${module._id}`, module);
    return response.data;
  };

  
export const deleteModule = async (moduleId: string | undefined) => {
    const response = await axios
      .delete(`${MODULES_API}/${moduleId}`);
    return response.data;
  };

  
export const createModule = async (courseId: string | undefined, module: Module) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  };
  
export const findModulesForCourse = async (courseId: string | undefined) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
