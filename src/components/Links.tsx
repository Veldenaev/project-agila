export default function Links() {
  const pages = [
    {
      name: "Landing",
      route: "/",
    },
    {
      name: "Login",
      route: "/login",
    },
    {
      name: "Dashboard - Admin",
      route: "/dashboard_admin",
    },
    {
      name: "Dashboard - Lawyer",
      route: "/dashboard_lawyer",
    },
    {
      name: "Dashboard - Client",
      route: "/dashboard_client",
    },
    {
      name: "Account Management",
      route: "/account_management",
    },
    {
      name: "Case Management",
      route: "/case_management",
    },
  ];
  const pagesJsx = pages.map(({ name, route }, index) => (
    <a
      key={index}
      href={route}
      className="z-10 flex h-full w-full items-center justify-center bg-violet-500 hover:bg-violet-500/80"
    >
      <div>{name} page</div>
    </a>
  ));

  return (
    <div className="flex h-10 w-full flex-row items-center text-center text-white">
      {pagesJsx}
    </div>
  );
}
