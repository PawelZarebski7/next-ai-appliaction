import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [ "/", "/profile", "/credits", "/api/webhooks(.*)"],

  
  
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};