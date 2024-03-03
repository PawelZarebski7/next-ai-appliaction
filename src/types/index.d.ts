// USER PARAMS

declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  photo: string
};

declare type UpdateUserParams = {
   firstName: string;
   lastName: string;
   username: string;
   photo: string;
 };