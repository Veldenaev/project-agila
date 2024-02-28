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
  const pagesJsx = pages.map(({name, route}, index) =>
      <a key={index} href={route} className="z-10 h-full w-full bg-violet-500 hover:bg-violet-500/80 flex justify-center items-center"><div>{name} page</div></a>
    );

  return (<div className="w-full h-10 text-white flex flex-row items-center text-center">
    {pagesJsx}
  </div>);
}
