import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
const preteectRoutes = createRouteMatcher([
  "/",
  "/api",
  '/upcoming',
  '/previous',
  '/personal-room',
  '/recordings',
  '/meetings(.*)',
]);
export default clerkMiddleware(async(auth,req)=>{
  if(preteectRoutes(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};