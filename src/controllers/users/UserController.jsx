import { UserModel } from "../../models/users/UserModel";




export const getUsersByIdController = async (id) => {
  const userModel = new UserModel();
   
    const response = await userModel.getUsersByIdModel(id);
    return response;
  
};


export const updateUserController = async (data) => {
 // console.log("data", data);
  const userModel = new UserModel();
  

    const response = await userModel.updateUserModel(data);
    return response;
  
};

export const getDataSelectsController = async () => {
  const userModel = new UserModel();

    const response = await userModel.getDataSelectsModel();
    return response;
  
}

export const getShowUsersController = async (id) => {
  const userModel = new UserModel();

    const response = await userModel.getShowUsersModel(id);
    return response;
  
}
