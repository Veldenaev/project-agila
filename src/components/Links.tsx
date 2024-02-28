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
      name: "Dashboard",
      route: "/dashboard",
    },
    {
      name: "Transaction management",
      route: "/transaction_management",
    },
    {
      name: "Notification management",
      route: "/notification_management",
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
