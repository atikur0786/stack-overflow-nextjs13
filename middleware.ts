import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhook",
  "/question/:id",
  "/tags",
  "/tags/:id",
  "/question/:id ",
  "/community",
  "/jobs",
]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return; // if it's a public route, do nothing
  auth().protect(); // for any other route, require auth
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
