export default function Links() {
  const pages = [
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
      <a key={index} href={route} className="w-full hover:bg-white/10"><div>{name} page</div></a>
    );

  return (<div className="w-full h-20 text-white flex flex-row items-center text-center">
    {pagesJsx}
  </div>);
}
