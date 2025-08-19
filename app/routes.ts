import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/country/:selectedCountry", "routes/country.tsx"),
] satisfies RouteConfig;