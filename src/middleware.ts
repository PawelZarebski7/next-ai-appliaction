import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [ "/", "/profile", "/credits"],

  
  
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};